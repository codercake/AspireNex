// Startup Schema
const startupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    founder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, default: Date.now },
    availability: { type: Boolean, default: true },
  });
  
  const Startup = mongoose.model('Startup', startupSchema);