import moment from 'moment/moment';

const BookingRows = ({ booking }) => {
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="rounded-2xl w-24 h-24">
                        <img src={booking.img} />
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{booking.service}</div>
            </td>
            <td>
                <div className="font-bold">${booking.servicePrice}</div>
            </td>
            <td>
            <div className="font-bold">{moment(booking.date).format("MMMM D, YYYY,  h:mm a")}</div>
            </td>
            <th>
                <button className="btn btn-warning rounded-md bg-orange-600 text-white">Pending</button>
            </th>

        </tr>
    );
};

export default BookingRows;