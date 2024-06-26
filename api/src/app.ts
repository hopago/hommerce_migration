import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../openapi.json";

import { connectDB } from "./config/dbConn";
import { whiteList } from "./config/cors";
import { PORT } from "./config/port";

import { errorHandler } from "./middleware/error/errorHandler";

import userRouter from "./(user)/routes/user";
import userDataRouter from "./(user)/routes/user-data";

import authorRouter from "./(author)/routes/author";

import bookRouter from "./(book)/routes/book";
import bookDataRouter from "./(book)/routes/data";
import bookAnalyticsRouter from "./(book)/routes/bookAnalytics";
import bookDetailsRouter from "./(book)/(details)/routes/detail";
import bookRecommendRouter from "./(book)/(recommend)/routes/route";
import bookLangPageRouter from "./(book)/routes/[lang]/book";

import clientRequestRouter from "./client/router/client";

import cartRouter from "./(user)/(cart)/routes/cart";
import reviewRouter from "./(review)/routes/review";
import reviewReplyRouter from "./(review)/(reply)/routes/review-reply";
import reviewTotalRouter from "./(review)/(total)/routes/review-total";
import favorRouter from "./(user)/(favor)/routes/favor";
import pointRouter from "./(user)/(point)/routes/point";
import pointLogRouter from "./(user)/(point)/(log)/routes/point-log";

import clerkRouter from "./webhook/clerk/routes/clerk";

const app = express();

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: whiteList,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

app.use("/author", authorRouter);

app.use("/book/details", bookDetailsRouter);
app.use("/book/recommend", bookRecommendRouter);
app.use("/book/lang", bookLangPageRouter);
app.use("/book/a", bookAnalyticsRouter);
app.use("/book/d", bookDataRouter);
app.use("/book", bookRouter);

app.use("/cart", cartRouter);
app.use("/client", clientRequestRouter);

app.use("/favor", favorRouter);

app.use("/point", pointRouter);
app.use("/point/log", pointLogRouter);

app.use("/review", reviewRouter);
app.use("/review/reply", reviewReplyRouter);
app.use("/review/total", reviewTotalRouter);

app.use("/user/d", userDataRouter);
app.use("/user", userRouter);

app.use("/webhook/clerk", clerkRouter);

app.use("/api/specs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Sever is listening on port:${PORT}`);
});
