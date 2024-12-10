import axios from "axios";
import { BASE_URL } from "./../constants/constants";

export const fetchData = async (
  setLoading,
  setError,
  setPlace,
  setBooking,
  productId
) => {
  setLoading(true);
  setError(null);

  try {
    const [placeResponse, bookingsResponse] = await Promise.all([
      axios.get(`${BASE_URL}places/${productId}`),
      axios.get(`${BASE_URL}bookings/${productId}`),
    ]);
    setPlace(placeResponse.data);
    setBooking(bookingsResponse.data);
  } catch (err) {
    setError(err.response?.data?.error || "Something went wrong");
  } finally {
    setLoading(false);
  }
};
