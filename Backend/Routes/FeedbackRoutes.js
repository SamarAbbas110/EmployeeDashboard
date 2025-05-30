import express from "express";
const router = express.Router();
import Feedback from "../Models/FeedBack.js";

//Submit the Feedback Anonymously
router.post("/", async (req, res) => {
  try {
    const { text, category } = req.body;
    const feedback = new Feedback({ text, category });
    await feedback.save();
    res.status(201).json({ message: "Feedback saved" });
  } catch (err) {
    console.error("Error saving feedback:", err);
    res.status(500).json({ error: "Server error" });
  }
});

//Get all the Feedback(Optional Category Filter);
router.get("/", async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    //Sort by Newest Feedback First
    const newestFeedback = await Feedback.find(filter).sort({ createdAt: -1 });
    res.json(newestFeedback);
  } catch (err) {
    next(err);
  }
});

//Mark Feedback as Reviewed

router.patch("/:id/reviewed", async (req, res, next) => {
  try {
    const updated = await Feedback.findByIdAndUpdate(
      req.params.id,
      { reviewed: true },
      { new: true }
    );
    if (!updated) {
      return res.sendStatus(404);
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// Delete Reviewed(Optional)

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteFeedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!deleteFeedback) {
      return res.sendStatus(404);
    }
    res.json({ messaage: "Deleted" });
  } catch (err) {
    next(err);
  }
});


export default router