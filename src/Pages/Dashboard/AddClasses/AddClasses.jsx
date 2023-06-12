
const AddClasses = () => {
    return (
        <div>
            <form>
                {/* ------- */}
              <div className="flex gap-4">
              <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Class name
                        </span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Class Image
                        </span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
              </div>
                {/* ------- */}
              <div className="flex gap-4">
              <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Instructor name
                        </span>
                    </label>
                    <input type="text" placeholder="Type here" readOnly className="input input-bordered w-full max-w-xs" />
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Instructor email
                        </span>
                    </label>
                    <input type="text" placeholder="Type here" readOnly className="input input-bordered w-full max-w-xs" />
                </div>
              </div>
                {/* ------- */}
              <div className="flex gap-4">
              <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Available seats
                        </span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Price
                        </span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
              </div>
            </form>
        </div>
    );
};

export default AddClasses;