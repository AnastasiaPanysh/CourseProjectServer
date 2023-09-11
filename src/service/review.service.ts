import {
  getReviewDB,
  getReviewByIdDB,
  createReviewDB,
  updateReviewDB,
  deleteReviewDB,
} from "../repository/review.repository";

async function getReview() {
  return await getReviewDB();
}

async function getReviewById(id) {
  return await getReviewByIdDB(id);
}

async function createReview(title) {
  return await createReviewDB(title);
}

async function updateReview(id, title) {
  return await updateReviewDB(id, title);
}
async function deleteReview(id) {
  return await deleteReviewDB(id);
}

export { getReview, getReviewById, createReview, updateReview, deleteReview };
