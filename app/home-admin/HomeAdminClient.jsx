"use client";

import { useCallback, useEffect, useState } from "react";
import "./home-admin.css";

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

const EMPTY_BANNER = () => ({
  id: uid("banner"),
  src: "",
  alt: "",
  type: "link",
  link: "",
  courseName: "",
  customTitle: "",
  hideMode: false,
  useFlightAnimation: false,
  leadPlace: "Home V2 banner",
  active: true,
  order: 0,
});

const EMPTY_TRENDING = () => ({
  id: uid("trend"),
  videoId: "",
  mp4Src: "",
  title: "",
  thumbnail: "",
  active: true,
  order: 0,
});

const EMPTY_VOICE = () => ({
  id: uid("voice"),
  src: "",
  poster: "",
  title: "",
  alumnusName: "",
  company: "",
  feedback: "",
  active: true,
  order: 0,
});

async function uploadFile(file) {
  const form = new FormData();
  form.append("file", file);
  const res = await fetch("/api/home-cms/upload", { method: "POST", body: form });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || "Upload failed");
  return body.url;
}

function MediaField({ label, value, onChange, accept }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setBusy(true);
    setErr("");
    try {
      const url = await uploadFile(file);
      onChange(url);
    } catch (error) {
      setErr(error.message || "Upload failed");
    } finally {
      setBusy(false);
    }
  };

  const isImage = /\.(jpe?g|png|webp|gif)$/i.test(value || "");

  return (
    <div className="home-cms-field full">
      <label>{label}</label>
      <div className="home-cms-media-row">
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste URL / path or upload a file"
        />
        <input type="file" accept={accept} onChange={onFile} disabled={busy} />
        {isImage && value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="home-cms-preview" />
        ) : null}
      </div>
      {busy ? <small>Uploading…</small> : null}
      {err ? <small className="home-cms-error">{err}</small> : null}
    </div>
  );
}

export default function HomeAdminClient() {
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState("banners");
  const [banners, setBanners] = useState([]);
  const [trendingVideos, setTrending] = useState([]);
  const [voiceVideos, setVoice] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, isError = false) => {
    setToast({ message, isError });
    window.setTimeout(() => setToast(null), 3200);
  };

  const load = useCallback(async () => {
    const res = await fetch("/api/home-cms?admin=1", { cache: "no-store" });
    if (res.status === 401) {
      setAuthed(false);
      return;
    }
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      showToast(body.message || "Could not load content", true);
      return;
    }
    setAuthed(true);
    setBanners(body.data?.banners || []);
    setTrending(body.data?.trendingVideos || []);
    setVoice(body.data?.voiceVideos || []);
  }, []);

  useEffect(() => {
    load().finally(() => setLoading(false));
  }, [load]);

  const onLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/home-cms/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      setLoginError(body.message || "Wrong password.");
      return;
    }
    setPassword("");
    setLoading(true);
    await load();
    setLoading(false);
  };

  const onLogout = async () => {
    await fetch("/api/home-cms/logout", { method: "POST" });
    setAuthed(false);
  };

  const onSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/home-cms", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          banners: banners.map((b, i) => ({ ...b, order: i })),
          trendingVideos: trendingVideos.map((v, i) => ({ ...v, order: i })),
          voiceVideos: voiceVideos.map((v, i) => ({ ...v, order: i })),
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.message || "Save failed");
      setBanners(body.data?.banners || banners);
      setTrending(body.data?.trendingVideos || trendingVideos);
      setVoice(body.data?.voiceVideos || voiceVideos);
      showToast("Saved — homepage will use the new content.");
    } catch (err) {
      showToast(err.message || "Save failed", true);
    } finally {
      setSaving(false);
    }
  };

  const updateList = (setter, id, patch) => {
    setter((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  const removeList = (setter, id) => {
    setter((prev) => prev.filter((item) => item.id !== id));
  };

  if (loading) {
    return (
      <div className="home-cms">
        <div className="home-cms-loading">Loading Home CMS…</div>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="home-cms">
        <form className="home-cms-login" onSubmit={onLogin}>
          <h1>Home CMS Admin</h1>
          <p>
            Manage New Home banners, Trending Course Insights videos, and Voice
            testimonials. Changes go live on the homepage after you save.
          </p>
          {loginError ? <p className="home-cms-error">{loginError}</p> : null}
          <label htmlFor="home-cms-pass">Password</label>
          <input
            id="home-cms-pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <button type="submit" className="home-cms-btn home-cms-btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="home-cms">
      <div className="home-cms-shell">
        <header className="home-cms-head">
          <div>
            <h1>Home CMS</h1>
            <p>
              Edit New Home media without a developer. Form leads still email{" "}
              <strong>admin@urbancode.in</strong> and <strong>zen@urbancode.in</strong>.
            </p>
          </div>
          <div className="home-cms-head-actions">
            <a className="home-cms-btn home-cms-btn-secondary" href="/" target="_blank" rel="noreferrer">
              View homepage
            </a>
            <button type="button" className="home-cms-btn home-cms-btn-primary" onClick={onSave} disabled={saving}>
              {saving ? "Saving…" : "Save all changes"}
            </button>
            <button type="button" className="home-cms-btn home-cms-btn-secondary" onClick={onLogout}>
              Log out
            </button>
          </div>
        </header>

        <div className="home-cms-tabs" role="tablist">
          {[
            ["banners", "Banners"],
            ["trending", "Trending Insights"],
            ["voice", "Voice Videos"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={`home-cms-tab${tab === key ? " is-active" : ""}`}
              onClick={() => setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "banners" && (
          <section className="home-cms-panel">
            <div className="home-cms-panel-top">
              <h2>Homepage banners</h2>
              <button
                type="button"
                className="home-cms-btn home-cms-btn-secondary"
                onClick={() => setBanners((prev) => [...prev, EMPTY_BANNER()])}
              >
                + Add banner
              </button>
            </div>
            <p className="home-cms-hint">
              Choose <strong>Redirect link</strong> to open a URL, or{" "}
              <strong>Open form</strong> to show the enquiry modal (results go to
              admin@urbancode.in + zen@urbancode.in).
            </p>
            {banners.map((banner, idx) => (
              <article key={banner.id} className="home-cms-card">
                <div className="home-cms-card-head">
                  <strong>Banner {idx + 1}</strong>
                  <button
                    type="button"
                    className="home-cms-btn home-cms-btn-danger"
                    onClick={() => removeList(setBanners, banner.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="home-cms-grid">
                  <MediaField
                    label="Banner image (URL or upload)"
                    value={banner.src}
                    accept="image/*"
                    onChange={(src) => updateList(setBanners, banner.id, { src })}
                  />
                  <div className="home-cms-field">
                    <label>Alt text</label>
                    <input
                      value={banner.alt || ""}
                      onChange={(e) => updateList(setBanners, banner.id, { alt: e.target.value })}
                    />
                  </div>
                  <div className="home-cms-field">
                    <label>Click action</label>
                    <select
                      value={banner.type || "link"}
                      onChange={(e) =>
                        updateList(setBanners, banner.id, { type: e.target.value })
                      }
                    >
                      <option value="link">Redirect link</option>
                      <option value="modal">Open form (email admin + zen)</option>
                    </select>
                  </div>
                  {banner.type === "link" ? (
                    <div className="home-cms-field">
                      <label>Redirect URL</label>
                      <input
                        value={banner.link || ""}
                        onChange={(e) =>
                          updateList(setBanners, banner.id, { link: e.target.value })
                        }
                        placeholder="/courses/... or https://..."
                      />
                    </div>
                  ) : (
                    <>
                      <div className="home-cms-field">
                        <label>Form course name</label>
                        <input
                          value={banner.courseName || ""}
                          onChange={(e) =>
                            updateList(setBanners, banner.id, {
                              courseName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="home-cms-field">
                        <label>Form title</label>
                        <input
                          value={banner.customTitle || ""}
                          onChange={(e) =>
                            updateList(setBanners, banner.id, {
                              customTitle: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="home-cms-field">
                        <label>Lead place label</label>
                        <input
                          value={banner.leadPlace || ""}
                          onChange={(e) =>
                            updateList(setBanners, banner.id, {
                              leadPlace: e.target.value,
                            })
                          }
                        />
                      </div>
                    </>
                  )}
                  <label className="home-cms-check">
                    <input
                      type="checkbox"
                      checked={!!banner.useFlightAnimation}
                      onChange={(e) =>
                        updateList(setBanners, banner.id, {
                          useFlightAnimation: e.target.checked,
                        })
                      }
                    />
                    Flight animation (study abroad)
                  </label>
                  <label className="home-cms-check">
                    <input
                      type="checkbox"
                      checked={!!banner.hideMode}
                      onChange={(e) =>
                        updateList(setBanners, banner.id, { hideMode: e.target.checked })
                      }
                    />
                    Hide mode field on form
                  </label>
                  <label className="home-cms-check">
                    <input
                      type="checkbox"
                      checked={banner.active !== false}
                      onChange={(e) =>
                        updateList(setBanners, banner.id, { active: e.target.checked })
                      }
                    />
                    Active on homepage
                  </label>
                </div>
              </article>
            ))}
          </section>
        )}

        {tab === "trending" && (
          <section className="home-cms-panel">
            <div className="home-cms-panel-top">
              <h2>Trending Course Insights</h2>
              <button
                type="button"
                className="home-cms-btn home-cms-btn-secondary"
                onClick={() => setTrending((prev) => [...prev, EMPTY_TRENDING()])}
              >
                + Add video
              </button>
            </div>
            <p className="home-cms-hint">
              Use a YouTube video ID and/or an MP4 link/upload, plus a thumbnail
              image (URL or upload). Shown on New Home → Trending Course Insights.
            </p>
            {trendingVideos.map((video, idx) => (
              <article key={video.id} className="home-cms-card">
                <div className="home-cms-card-head">
                  <strong>Video {idx + 1}</strong>
                  <button
                    type="button"
                    className="home-cms-btn home-cms-btn-danger"
                    onClick={() => removeList(setTrending, video.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="home-cms-grid">
                  <div className="home-cms-field full">
                    <label>Title</label>
                    <input
                      value={video.title || ""}
                      onChange={(e) =>
                        updateList(setTrending, video.id, { title: e.target.value })
                      }
                    />
                  </div>
                  <div className="home-cms-field">
                    <label>YouTube video ID</label>
                    <input
                      value={video.videoId || ""}
                      onChange={(e) =>
                        updateList(setTrending, video.id, { videoId: e.target.value })
                      }
                      placeholder="e.g. 48za3-k6OkQ"
                    />
                  </div>
                  <MediaField
                    label="MP4 video (optional URL or upload)"
                    value={video.mp4Src}
                    accept="video/mp4,video/webm,video/quicktime"
                    onChange={(mp4Src) => updateList(setTrending, video.id, { mp4Src })}
                  />
                  <MediaField
                    label="Thumbnail image (URL or upload)"
                    value={video.thumbnail}
                    accept="image/*"
                    onChange={(thumbnail) =>
                      updateList(setTrending, video.id, { thumbnail })
                    }
                  />
                  <label className="home-cms-check">
                    <input
                      type="checkbox"
                      checked={video.active !== false}
                      onChange={(e) =>
                        updateList(setTrending, video.id, { active: e.target.checked })
                      }
                    />
                    Active on homepage
                  </label>
                </div>
              </article>
            ))}
          </section>
        )}

        {tab === "voice" && (
          <section className="home-cms-panel">
            <div className="home-cms-panel-top">
              <h2>Voice that Matters</h2>
              <button
                type="button"
                className="home-cms-btn home-cms-btn-secondary"
                onClick={() => setVoice((prev) => [...prev, EMPTY_VOICE()])}
              >
                + Add video
              </button>
            </div>
            <p className="home-cms-hint">
              Student testimonial MP4s and posters for the Voice that Matters
              section.
            </p>
            {voiceVideos.map((video, idx) => (
              <article key={video.id} className="home-cms-card">
                <div className="home-cms-card-head">
                  <strong>Clip {idx + 1}</strong>
                  <button
                    type="button"
                    className="home-cms-btn home-cms-btn-danger"
                    onClick={() => removeList(setVoice, video.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="home-cms-grid">
                  <div className="home-cms-field">
                    <label>Title</label>
                    <input
                      value={video.title || ""}
                      onChange={(e) =>
                        updateList(setVoice, video.id, { title: e.target.value })
                      }
                    />
                  </div>
                  <div className="home-cms-field">
                    <label>Student name</label>
                    <input
                      value={video.alumnusName || ""}
                      onChange={(e) =>
                        updateList(setVoice, video.id, {
                          alumnusName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <MediaField
                    label="Video MP4 (URL or upload)"
                    value={video.src}
                    accept="video/mp4,video/webm,video/quicktime"
                    onChange={(src) => updateList(setVoice, video.id, { src })}
                  />
                  <MediaField
                    label="Poster image (URL or upload)"
                    value={video.poster}
                    accept="image/*"
                    onChange={(poster) => updateList(setVoice, video.id, { poster })}
                  />
                  <label className="home-cms-check">
                    <input
                      type="checkbox"
                      checked={video.active !== false}
                      onChange={(e) =>
                        updateList(setVoice, video.id, { active: e.target.checked })
                      }
                    />
                    Active on homepage
                  </label>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>

      {toast ? (
        <div className={`home-cms-toast${toast.isError ? " is-error" : ""}`}>
          {toast.message}
        </div>
      ) : null}
    </div>
  );
}
