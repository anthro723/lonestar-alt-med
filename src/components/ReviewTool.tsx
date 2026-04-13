"use client";

import { useState, useEffect, useRef } from "react";

interface ImageAttachment {
  id: string;
  dataUrl: string; // base64 thumbnail
  name: string;
}

interface Comment {
  id: string;
  sectionId: string;
  sectionName: string;
  text: string;
  action: "keep" | "change" | "remove" | "note";
  timestamp: string;
  author: string;
  images: ImageAttachment[];
}

const ACTION_LABELS = {
  keep: { label: "Keep As-Is", color: "bg-green-100 text-green-800", icon: "\u2713" },
  change: { label: "Change This", color: "bg-yellow-100 text-yellow-800", icon: "\u270F\uFE0F" },
  remove: { label: "Remove", color: "bg-red-100 text-red-800", icon: "\u2715" },
  note: { label: "Note", color: "bg-blue-100 text-blue-800", icon: "\uD83D\uDCAC" },
};

function resizeImage(file: File, maxWidth = 800): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scale = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
      };
      img.src = e.target!.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export function ReviewTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [newComment, setNewComment] = useState("");
  const [newAction, setNewAction] = useState<Comment["action"]>("note");
  const [authorName, setAuthorName] = useState("");
  const [pendingImages, setPendingImages] = useState<ImageAttachment[]>([]);
  const [uploading, setUploading] = useState(false);
  const [viewingImage, setViewingImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lam-review-comments");
      if (saved) setComments(JSON.parse(saved));
      const name = localStorage.getItem("lam-reviewer-name");
      if (name) setAuthorName(name);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lam-review-comments", JSON.stringify(comments));
    } catch (e) {
      // localStorage might be full with images — warn user
      console.warn("Could not save — storage may be full");
    }
  }, [comments]);

  useEffect(() => {
    document.body.classList.toggle("review-mode", reviewMode);
  }, [reviewMode]);

  useEffect(() => {
    if (!reviewMode) return;
    const handler = (e: MouseEvent) => {
      const section = (e.target as HTMLElement).closest("[data-review-section]");
      if (section) {
        e.preventDefault();
        e.stopPropagation();
        setActiveSection(section.getAttribute("data-review-section"));
        setPendingImages([]);
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [reviewMode]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    const newImages: ImageAttachment[] = [];
    for (const file of Array.from(files)) {
      if (!file.type.startsWith("image/")) continue;
      const dataUrl = await resizeImage(file);
      newImages.push({ id: Date.now().toString() + Math.random().toString(36).slice(2), dataUrl, name: file.name });
    }
    setPendingImages((prev) => [...prev, ...newImages]);
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePendingImage = (id: string) => {
    setPendingImages((prev) => prev.filter((img) => img.id !== id));
  };

  const addComment = () => {
    if ((!newComment.trim() && pendingImages.length === 0) || !activeSection) return;
    const comment: Comment = {
      id: Date.now().toString(),
      sectionId: activeSection,
      sectionName: activeSection.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      text: newComment,
      action: newAction,
      timestamp: new Date().toLocaleString(),
      author: authorName || "Reviewer",
      images: pendingImages,
    };
    setComments((prev) => [...prev, comment]);
    setNewComment("");
    setPendingImages([]);
    setActiveSection(null);
    const el = document.querySelector(`[data-review-section="${activeSection}"]`);
    if (el) el.classList.add("has-comment");
  };

  const deleteComment = (id: string) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const exportComments = () => {
    // Build HTML export with embedded images
    let html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Website Review — Lonestar Alternative Medicine</title>
<style>body{font-family:Arial,sans-serif;max-width:800px;margin:20px auto;padding:0 20px}
.comment{border:1px solid #ddd;border-radius:8px;margin:16px 0;padding:16px}
.keep{border-left:4px solid #22c55e}.change{border-left:4px solid #eab308}
.remove{border-left:4px solid #ef4444}.note{border-left:4px solid #3b82f6}
.meta{color:#888;font-size:12px}.section{font-weight:bold;color:#1a2332}
.badge{display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:bold}
.images{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.images img{max-width:300px;border-radius:4px;border:1px solid #ddd}
h1{color:#1a2332}h2{color:#b8860b;border-bottom:1px solid #eee;padding-bottom:8px}</style></head><body>
<h1>Website Review Comments</h1>
<p>Exported: ${new Date().toLocaleString()} | Total Comments: ${comments.length}</p><hr>`;

    const bySection: Record<string, Comment[]> = {};
    for (const c of comments) {
      if (!bySection[c.sectionName]) bySection[c.sectionName] = [];
      bySection[c.sectionName].push(c);
    }

    for (const [section, sectionComments] of Object.entries(bySection)) {
      html += `<h2>${section}</h2>`;
      for (const c of sectionComments) {
        html += `<div class="comment ${c.action}">
<span class="badge" style="background:${c.action === "keep" ? "#dcfce7" : c.action === "change" ? "#fef9c3" : c.action === "remove" ? "#fee2e2" : "#dbeafe"}">${ACTION_LABELS[c.action].icon} ${ACTION_LABELS[c.action].label}</span>
<p>${c.text || "(No text — see images)"}</p>`;
        if (c.images.length > 0) {
          html += `<div class="images">`;
          for (const img of c.images) {
            html += `<div><img src="${img.dataUrl}" alt="${img.name}"><br><small>${img.name}</small></div>`;
          }
          html += `</div>`;
        }
        html += `<div class="meta">\u2014 ${c.author}, ${c.timestamp}</div></div>`;
      }
    }

    html += `</body></html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `LAM-review-${new Date().toISOString().slice(0, 10)}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const commentCount = comments.length;
  const imageCount = comments.reduce((sum, c) => sum + c.images.length, 0);
  const sectionComments = activeSection ? comments.filter((c) => c.sectionId === activeSection) : [];

  return (
    <>
      {/* Image lightbox */}
      {viewingImage && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4" onClick={() => setViewingImage(null)}>
          <img src={viewingImage} alt="Review image" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}

      {/* Floating toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
        style={{ backgroundColor: reviewMode ? "#d31e41" : "#b8860b", color: "white" }}
      >
        <span className="text-lg">{reviewMode ? "\u270F\uFE0F" : "\uD83D\uDCAC"}</span>
        <span className="text-sm font-medium">
          Review {commentCount > 0 && `(${commentCount})`} {imageCount > 0 && `\uD83D\uDCF7${imageCount}`}
        </span>
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[420px] max-h-[75vh] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 text-white flex justify-between items-center" style={{ backgroundColor: "#1a2332" }}>
            <div>
              <div className="font-bold text-sm">Website Review Tool</div>
              <div className="text-xs text-white/70">{commentCount} comments{imageCount > 0 && `, ${imageCount} photos`}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setReviewMode(!reviewMode)}
                className={`text-xs px-3 py-1 rounded-full font-medium ${reviewMode ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                {reviewMode ? "Exit Review Mode" : "Start Reviewing"}
              </button>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">{"\u2715"}</button>
            </div>
          </div>

          {/* Author name */}
          {!authorName && (
            <div className="px-4 py-3 bg-yellow-50 border-b border-yellow-200">
              <div className="text-xs text-yellow-800 mb-1 font-medium">Who&apos;s reviewing?</div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Your name (Richard, Amy, etc.)"
                  className="flex-1 text-sm px-2 py-1 border rounded"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.target as HTMLInputElement).value) {
                      const name = (e.target as HTMLInputElement).value;
                      setAuthorName(name);
                      localStorage.setItem("lam-reviewer-name", name);
                    }
                  }}
                />
              </div>
            </div>
          )}

          {/* Instructions */}
          {!reviewMode && !activeSection && (
            <div className="px-4 py-6 text-center text-sm text-gray-500">
              <p className="mb-2">Click <strong>&quot;Start Reviewing&quot;</strong> above, then click any section on the page to leave feedback.</p>
              <p className="text-xs">You can type notes, mark sections for changes, and <strong>upload photos</strong> to show what you want.</p>
            </div>
          )}

          {/* Active section */}
          {activeSection && (
            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 max-h-[50vh] overflow-y-auto">
              <div className="text-xs text-gray-500 mb-1">Commenting on:</div>
              <div className="font-medium text-sm mb-2" style={{ color: "#1a2332" }}>
                {activeSection.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </div>

              {/* Existing comments for this section */}
              {sectionComments.map((c) => (
                <div key={c.id} className={`text-xs p-2 rounded mb-1 ${ACTION_LABELS[c.action].color}`}>
                  <div className="flex justify-between">
                    <span className="font-medium">{ACTION_LABELS[c.action].icon} {ACTION_LABELS[c.action].label}</span>
                    <button onClick={() => deleteComment(c.id)} className="opacity-50 hover:opacity-100">{"\u2715"}</button>
                  </div>
                  {c.text && <div className="mt-1">{c.text}</div>}
                  {c.images.length > 0 && (
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {c.images.map((img) => (
                        <img
                          key={img.id}
                          src={img.dataUrl}
                          alt={img.name}
                          className="w-16 h-16 object-cover rounded cursor-pointer border border-white"
                          onClick={(e) => { e.stopPropagation(); setViewingImage(img.dataUrl); }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Action selector */}
              <div className="flex gap-1 mb-2 flex-wrap">
                {(Object.keys(ACTION_LABELS) as Comment["action"][]).map((action) => (
                  <button
                    key={action}
                    onClick={() => setNewAction(action)}
                    className={`text-[10px] px-2 py-1 rounded-full font-medium transition-all ${newAction === action ? ACTION_LABELS[action].color + " ring-1 ring-current" : "bg-gray-100 text-gray-500"}`}
                  >
                    {ACTION_LABELS[action].icon} {ACTION_LABELS[action].label}
                  </button>
                ))}
              </div>

              {/* Comment input */}
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="What would you like to change here? You can also upload photos below."
                className="w-full text-sm p-2 border rounded resize-none"
                rows={3}
                autoFocus
              />

              {/* Image upload */}
              <div className="mt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="text-xs px-3 py-1.5 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-700 w-full flex items-center justify-center gap-1"
                >
                  {uploading ? "Processing..." : "\uD83D\uDCF7 Upload Photos (tap to add images)"}
                </button>

                {/* Pending image previews */}
                {pendingImages.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {pendingImages.map((img) => (
                      <div key={img.id} className="relative">
                        <img
                          src={img.dataUrl}
                          alt={img.name}
                          className="w-20 h-20 object-cover rounded border border-gray-200 cursor-pointer"
                          onClick={(e) => { e.stopPropagation(); setViewingImage(img.dataUrl); }}
                        />
                        <button
                          onClick={() => removePendingImage(img.id)}
                          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-[10px] flex items-center justify-center"
                        >
                          {"\u2715"}
                        </button>
                        <div className="text-[9px] text-gray-400 truncate w-20 mt-0.5">{img.name}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={addComment}
                  className="flex-1 text-sm py-1.5 text-white rounded font-medium"
                  style={{ backgroundColor: "#b8860b" }}
                >
                  Add Comment {pendingImages.length > 0 && `(+${pendingImages.length} photos)`}
                </button>
                <button
                  onClick={() => { setActiveSection(null); setPendingImages([]); }}
                  className="text-sm py-1.5 px-3 border rounded text-gray-500 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Comments list */}
          <div className="flex-1 overflow-y-auto">
            {comments.length === 0 && !activeSection && reviewMode && (
              <div className="px-4 py-6 text-center text-sm text-gray-400">
                Click any section on the page to leave feedback
              </div>
            )}
            {comments.map((c) => (
              <div key={c.id} className="px-4 py-2 border-b border-gray-100 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${ACTION_LABELS[c.action].color}`}>
                      {ACTION_LABELS[c.action].icon} {ACTION_LABELS[c.action].label}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">{c.sectionName}</span>
                  </div>
                  <button onClick={() => deleteComment(c.id)} className="text-xs text-gray-300 hover:text-red-500">{"\u2715"}</button>
                </div>
                {c.text && <div className="text-sm mt-1">{c.text}</div>}
                {c.images.length > 0 && (
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {c.images.map((img) => (
                      <img
                        key={img.id}
                        src={img.dataUrl}
                        alt={img.name}
                        className="w-12 h-12 object-cover rounded cursor-pointer border"
                        onClick={() => setViewingImage(img.dataUrl)}
                      />
                    ))}
                    <span className="text-[10px] text-gray-400 self-end">{c.images.length} photo{c.images.length > 1 ? "s" : ""}</span>
                  </div>
                )}
                <div className="text-[10px] text-gray-400 mt-1">{"\u2014"} {c.author}, {c.timestamp}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          {comments.length > 0 && (
            <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 flex gap-2">
              <button
                onClick={exportComments}
                className="flex-1 text-xs py-1.5 text-white rounded font-medium"
                style={{ backgroundColor: "#1a2332" }}
              >
                Export All ({commentCount} comments, {imageCount} photos)
              </button>
              <button
                onClick={() => { if (confirm("Clear all comments and photos?")) setComments([]); }}
                className="text-xs py-1.5 px-3 border rounded text-gray-400 hover:text-red-500 hover:border-red-300"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
