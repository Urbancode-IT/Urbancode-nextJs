import mongoose from 'mongoose';

const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://abinash220304_db_user:abinash2204@cluster0.qmoihsl.mongodb.net/urbancodeDB?retryWrites=true&w=majority';

let cached = global.mongooseLeadEnquiries;

if (!cached) {
  cached = global.mongooseLeadEnquiries = { conn: null, promise: null };
}

async function connectLeadEnquiriesDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .createConnection(MONGODB_URI, { serverSelectionTimeoutMS: 4000 })
      .asPromise()
      .catch((err) => {
        cached.promise = null;
        throw err;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export async function getLeadEnquiryModel() {
  const conn = await connectLeadEnquiriesDB();
  if (conn.models.LeadEnquiry) {
    conn.deleteModel('LeadEnquiry');
  }

  const schema = new mongoose.Schema(
    {
      name: { type: String, default: '' },
      email: { type: String, default: '' },
      phone: { type: String, default: '' },
      topic: { type: String, default: '' },
      channel: { type: String, default: '' },
      sourcePage: { type: String, default: 'Not captured' },
      sourceSection: { type: String, default: '' },
      sourceForm: { type: String, default: 'Not captured' },
      sourceButton: { type: String, default: 'Not captured' },
    },
    { collection: 'lead_enquiries', timestamps: true }
  );

  schema.index({ createdAt: -1 });
  schema.index({ sourceForm: 1, sourceButton: 1 });

  return conn.model('LeadEnquiry', schema);
}

export async function recordLeadEnquiry(entry) {
  try {
    const Model = await getLeadEnquiryModel();
    await Model.create({
      name: entry.name || '',
      email: entry.email || '',
      phone: entry.phone || '',
      topic: entry.topic || '',
      channel: entry.channel || '',
      sourcePage: entry.sourcePage || 'Not captured',
      sourceSection: entry.sourceSection || '',
      sourceForm: entry.sourceForm || 'Not captured',
      sourceButton: entry.sourceButton || 'Not captured',
    });
  } catch (error) {
    console.error('Lead enquiry store failed:', error?.message || error);
  }
}
