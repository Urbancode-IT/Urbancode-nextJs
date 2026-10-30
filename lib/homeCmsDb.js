import mongoose from "mongoose";
import { institutionVideosData } from "@/app/data/institutionVideosData";
import { videoData } from "@/app/data/videoTestimonialsData";

/** Same Mongo cluster as Google Reviews / lead enquiries (urbancodeDB). */
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://abinash220304_db_user:abinash2204@cluster0.qmoihsl.mongodb.net/urbancodeDB?retryWrites=true&w=majority";

const DOC_KEY = "home-v2";

let cached = global.mongooseHomeCms;
if (!cached) {
  cached = global.mongooseHomeCms = { conn: null, promise: null };
}

export async function connectHomeCmsDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    console.log("🔄 Connecting to MongoDB (Home CMS)...");
    cached.promise = mongoose
      .createConnection(MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
      .asPromise()
      .then((conn) => {
        console.log("✅ Next.js Home CMS DB Connected");
        return conn;
      })
      .catch((err) => {
        console.error("❌ Home CMS DB Connection Error:", err);
        cached.promise = null;
        throw err;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const bannerSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    src: { type: String, required: true },
    alt: { type: String, default: "" },
    type: { type: String, enum: ["link", "modal"], default: "link" },
    link: { type: String, default: "" },
    courseName: { type: String, default: "" },
    customTitle: { type: String, default: "" },
    hideMode: { type: Boolean, default: false },
    useFlightAnimation: { type: Boolean, default: false },
    leadPlace: { type: String, default: "" },
    active: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { _id: false }
);

const trendingSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.Mixed, required: true },
    videoId: { type: String, default: "" },
    mp4Src: { type: String, default: "" },
    title: { type: String, default: "" },
    thumbnail: { type: String, default: "" },
    active: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { _id: false }
);

const voiceSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.Mixed, required: true },
    src: { type: String, default: "" },
    poster: { type: String, default: "" },
    title: { type: String, default: "" },
    alumnusName: { type: String, default: "" },
    company: { type: String, default: "" },
    feedback: { type: String, default: "" },
    active: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { _id: false }
);

export function getDefaultHomeCmsContent() {
  return {
    key: DOC_KEY,
    banners: [
      {
        id: "b1",
        src: "/images/home/FSD_TVL_Bootcamp.webp",
        alt: "Free Zero to Hero Full Stack Development Bootcamp in Tirunelveli on 31 October 2026",
        type: "modal",
        link: "",
        courseName: "Full Stack Development Bootcamp - Tirunelveli",
        customTitle: "Register for Zero to Hero Bootcamp",
        hideMode: true,
        useFlightAnimation: false,
        leadPlace: "Home V2 banner — FSD Tirunelveli Bootcamp",
        active: true,
        order: 0,
      },
      {
        id: "b2",
        src: "/images/home/6-month-program-banner.webp",
        alt: "AI Software Engineering Certification Program (6 Months)",
        type: "link",
        link: "/courses/fullstack-development/ai-software-engineering",
        courseName: "",
        customTitle: "",
        hideMode: false,
        useFlightAnimation: false,
        leadPlace: "",
        active: true,
        order: 1,
      },
      {
        id: "b3",
        src: "/images/home/studyabroad.webp",
        alt: "Study Abroad 2027",
        type: "link",
        link: "/study-abroad",
        courseName: "",
        customTitle: "",
        hideMode: false,
        useFlightAnimation: false,
        leadPlace: "",
        active: true,
        order: 2,
      },
      {
        id: "b4",
        src: "/images/home/ieltsbanner.webp",
        alt: "IELTS Training",
        type: "link",
        link: "/study-abroad#english-proficiency",
        courseName: "",
        customTitle: "",
        hideMode: false,
        useFlightAnimation: true,
        leadPlace: "",
        active: true,
        order: 3,
      },
      {
        id: "b5",
        src: "/images/home/data-engineering-with-azure.webp",
        alt: "Data Engineering with Microsoft Azure",
        type: "link",
        link: "/courses/data-engineering/data-engineering-with-microsoft-azure",
        courseName: "",
        customTitle: "",
        hideMode: false,
        useFlightAnimation: false,
        leadPlace: "",
        active: true,
        order: 4,
      },
    ],
    trendingVideos: institutionVideosData.map((v, i) => ({
      id: v.id,
      videoId: v.videoId || "",
      mp4Src: v.mp4Src || "",
      title: v.title || "",
      thumbnail: v.thumbnail || "",
      active: true,
      order: i,
    })),
    voiceVideos: videoData.map((v, i) => ({
      id: v.id,
      src: v.src || "",
      poster: v.poster || "",
      title: v.title || "",
      alumnusName: v.alumnusName || "",
      company: v.company || "",
      feedback: v.feedback || "",
      active: true,
      order: i,
    })),
  };
}

export async function getHomeCmsModel() {
  const conn = await connectHomeCmsDB();
  if (conn.models.HomeCmsContent) {
    return conn.model("HomeCmsContent");
  }
  const schema = new mongoose.Schema(
    {
      key: { type: String, required: true, unique: true, default: DOC_KEY },
      banners: { type: [bannerSchema], default: [] },
      trendingVideos: { type: [trendingSchema], default: [] },
      voiceVideos: { type: [voiceSchema], default: [] },
    },
    { timestamps: true, collection: "home_cms_content" }
  );
  return conn.model("HomeCmsContent", schema);
}

export async function getOrCreateHomeCmsContent() {
  const Model = await getHomeCmsModel();
  let doc = await Model.findOne({ key: DOC_KEY }).lean();
  if (!doc) {
    const defaults = getDefaultHomeCmsContent();
    doc = (await Model.create(defaults)).toObject();
  }
  return doc;
}

export async function saveHomeCmsContent(payload) {
  const Model = await getHomeCmsModel();
  const update = {
    banners: payload.banners || [],
    trendingVideos: payload.trendingVideos || [],
    voiceVideos: payload.voiceVideos || [],
  };
  const doc = await Model.findOneAndUpdate(
    { key: DOC_KEY },
    { $set: update },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  ).lean();
  return doc;
}

export function toPublicHomeCms(doc) {
  if (!doc) {
    const defaults = getDefaultHomeCmsContent();
    return {
      banners: defaults.banners.filter((b) => b.active).sort((a, b) => a.order - b.order),
      trendingVideos: defaults.trendingVideos
        .filter((v) => v.active)
        .sort((a, b) => a.order - b.order),
      voiceVideos: defaults.voiceVideos
        .filter((v) => v.active)
        .sort((a, b) => a.order - b.order),
    };
  }
  return {
    banners: (doc.banners || [])
      .filter((b) => b.active !== false)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    trendingVideos: (doc.trendingVideos || [])
      .filter((v) => v.active !== false && (v.videoId || v.mp4Src) && v.thumbnail)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    voiceVideos: (doc.voiceVideos || [])
      .filter((v) => v.active !== false && v.src)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
  };
}
