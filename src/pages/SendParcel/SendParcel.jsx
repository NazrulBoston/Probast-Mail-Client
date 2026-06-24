import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function SendParcel() {

  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      parcel_type: "document",
    },
  });

  const [pendingData, setPendingData] = useState(null);

  const parcelType = watch("parcel_type");

  const calculateDeliveryCost = (weight, type) => {
    return type === "document" ? weight * 3 : weight * 5;
  };

  const onSubmit = (data) => {

  alert("Form Submitted"); // TEST

  console.log("Submitted Data:", data);


  const cost = calculateDeliveryCost(
    data.weight,
    data.parcel_type
  );

  setPendingData({
    ...data,
    delivery_cost: cost,
    creation_date: new Date().toISOString(),
  });

  toast(
    (t) => (
      <div className="space-y-3">
        <p className="font-semibold">
          Delivery Cost:{" "}
          <span className="text-primary">${cost}</span>
        </p>

        <div className="flex gap-2">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              handleConfirm();
              toast.dismiss(t.id);
            }}
          >
            Confirm
          </button>

          <button
            className="btn btn-sm"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ),
    { duration: Infinity }
  );
};

  const handleConfirm = async () => {
    if (!pendingData) return;

    try {
      await fetch("/api/parcels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pendingData),
      });

      toast.success("Parcel sent successfully!");
      reset();
      setPendingData(null);
    } catch (error) {
      toast.error("Failed to send parcel");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Toaster />

      <h2 className="text-2xl font-bold text-center">
        Send Parcel
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* 📦 Parcel Information */}
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h3 className="card-title">
              Parcel Information
            </h3>

            {/* Parcel Type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Parcel Type
                </span>
              </label>

              <div className="flex gap-6">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="radio"
                    value="document"
                    className="radio radio-primary"
                    {...register("parcel_type", { required: true })}
                  />
                  <span className="label-text">Document</span>
                </label>

                <label className="label cursor-pointer gap-2">
                  <input
                    type="radio"
                    value="non-document"
                    className="radio radio-primary"
                    {...register("parcel_type", { required: true })}
                  />
                  <span className="label-text">Non-Document</span>
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">

              {/* ===============================
                 ⭐⭐⭐ NEW / IMPORTANT FIX ⭐⭐⭐
                 Allows decimal weights like 0.001
              =============================== */}
              <input
                type="number"
                step="0.001"     // ✅ NEW — allows decimals
                min="0.001"      // ✅ NEW — prevents 0 & negative
                placeholder="Weight (kg)"
                className="input input-bordered w-full"
                {...register("weight", { 
                  required: true,
                  min: 0.001,
                  valueAsNumber: true // ✅ NEW — auto converts to number
                })}
              />

              {/* Only for Non-Document */}
              {parcelType === "non-document" && (
                <input
                  type="text"
                  placeholder="Parcel Description"
                  className="input input-bordered w-full"
                  {...register("description")}
                />
              )}
            </div>
          </div>
        </div>

        {/* 👤 Sender Information */}
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h3 className="card-title">
              Sender Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Sender Name"
                className="input input-bordered w-full"
                {...register("sender_name", { required: true })}
              />

              <input
                type="tel"
                placeholder="Sender Phone"
                className="input input-bordered w-full"
                {...register("sender_phone", { required: true })}
              />

              <input
                type="text"
                placeholder="Sender Address"
                className="input input-bordered w-full md:col-span-2"
                {...register("sender_address", { required: true })}
              />
            </div>
          </div>
        </div>

        {/* 📍 Receiver Information */}
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h3 className="card-title">
              Receiver Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Receiver Name"
                className="input input-bordered w-full"
                {...register("receiver_name", { required: true })}
              />

              <input
                type="tel"
                placeholder="Receiver Phone"
                className="input input-bordered w-full"
                {...register("receiver_phone", { required: true })}
              />

              <input
                type="text"
                placeholder="Receiver Address"
                className="input input-bordered w-full md:col-span-2"
                {...register("receiver_address", { required: true })}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit Parcel
        </button>
      </form>
    </div>
  );
}
