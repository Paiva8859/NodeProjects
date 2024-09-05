import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["A Fazer", "Fazendo", "Feito"],
    default: "A Fazer",
  },
  description: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
