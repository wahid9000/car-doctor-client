import moment from 'moment/moment';

const BookingRows = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { _id, date, img, servicePrice, service, status } = booking;
    console.log(booking);

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-circle btn-sm bg-red-600 input-bordered'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded-2xl w-24 h-24">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{service}</div>
            </td>
            <td>
                <div className="font-bold">${servicePrice}</div>
            </td>
            <td>
                <div className="font-bold">{moment(date).format("MMMM D, YYYY,  h:mm a")}</div>
            </td>
            <th>
                { status === 'confirm' ? 
                    <button className="btn btn-outline rounded-md text-orange-600 ">Confirmed</button>
                :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-warning rounded-md bg-orange-600 text-white">Confirm</button>
                }
            </th>

        </tr>
    );
};

export default BookingRows;