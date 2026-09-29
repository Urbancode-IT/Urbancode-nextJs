import mongoose from 'mongoose';

const COMPILER_URI =
  process.env.COMPILER_MONGODB_URI ||
  'mongodb+srv://urbancodecompiler_db_user:Urbancode123@cluster0.ftwenuo.mongodb.net/compiler?retryWrites=true&w=majority';

let cached = global.mongooseCompilerLeads;

if (!cached) {
  cached = global.mongooseCompilerLeads = { conn: null, promise: null };
}

async function connectCompilerDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .createConnection(COMPILER_URI, { serverSelectionTimeoutMS: 8000 })
      .asPromise()
      .catch((err) => {
        cached.promise = null;
        throw err;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export async function getCompilerLeadModel() {
  const conn = await connectCompilerDB();
  if (conn.models.CompilerLead) return conn.models.CompilerLead;

  const schema = new mongoose.Schema(
    {
      clientId: { type: String, required: true, unique: true },
      name: { type: String, default: '' },
      email: { type: String, default: '' },
      mobile: { type: String, default: '' },
      courseName: { type: String, default: '' },
      message: { type: String, default: '' },
      mode: { type: String, default: '' },
      apiSuccess: { type: Boolean, default: false },
      apiError: { type: String, default: '' },
      createdAt: { type: Date, default: Date.now },
    },
    { collection: 'compilerleads' }
  );

  return conn.model('CompilerLead', schema);
}
