import { Document, Schema, Types, model } from "mongoose";

export interface IReview extends Document {
  _id: Types.ObjectId;
  buyWay: SellWay;
  bookId: string;
  bookTitle: string;
  userId: string;
  username: string;
  rating: ReviewRatingType;
  keyword: ReviewKeywords;
  desc: string;
  liked: string[];
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new Schema(
  {
    buyWay: {
      type: String,
      default: "종이책",
    },
    bookId: {
      type: String,
      require: true,
    },
    bookTitle: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    rating: {
      type: String,
      require: true,
    },
    keyword: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    liked: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Review = model<IReview>("Review", reviewSchema);

export default Review;
