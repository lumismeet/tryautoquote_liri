import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      vehicles,
      leadId,
      zipcode,
      currentlyInsured,
      activeLicense,
      ticketsLast3Years,
      sr22Filed,
      homeowner,
      married,
      gender,
      military,
      education,
      creditScore,
      dob,
      firstName,
      lastName,
      street,
      email,
      phone,
    } = body;

    if (!leadId || !zipcode || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1️⃣ Insert Lead
    // const { error: leadError } = await supabase
    //   .from("leads")
    //   .insert([
    //     {
    //       lead_id: leadId,
    //       zipcode,
    //       currently_insured: currentlyInsured,
    //       active_license: activeLicense,
    //       tickets_last_3_years: ticketsLast3Years,
    //       sr22_filed: sr22Filed,
    //       homeowner,
    //       married,
    //       gender,
    //       military,
    //       education,
    //       credit_score: creditScore,
    //       dob,
    //       first_name: firstName,
    //       last_name: lastName,
    //       street,
    //       email,
    //       phone,
    //     },
    //   ]);

    const { data: leadData, error: leadError } = await supabase
  .from("leads")
  .upsert(
    {
      lead_id: leadId,
      zipcode,
      currently_insured: currentlyInsured,
      active_license: activeLicense,
      tickets_last_3_years: ticketsLast3Years,
      sr22_filed: sr22Filed,
      homeowner,
      married,
      gender,
      military,
      education,
      credit_score: creditScore,
      dob,
      first_name: firstName,
      last_name: lastName,
      street,
      email,
      phone,
    },
    { onConflict: "lead_id" }
  ).select(`*, vehicles (*)`).single();


    if (leadError) {
      console.error("Lead insert error:", leadError);
      return NextResponse.json(
        { error: "Failed to insert lead" },
        { status: 500 }
      );
    }

    console.log("Lead upserted successfully:", leadData);

    // 2️⃣ Insert Vehicles
    // if (vehicles && vehicles.length > 0) {
    //   const formattedVehicles = vehicles.map((v: any) => ({
    //     lead_id: leadId,
    //     vehicle_make: v.vehicleMake ?? null,
    //     vehicle_model: v.vehicleModel ?? null,
    //     vehicle_year: v.vehicleYear ?? null,
    //     primary_use: v.primaryUse ?? null,
    //     coverage: v.coverage ?? null,
    //     mileage: v.mileage ?? null,
    //     ownership: v.ownership ?? null,
    //   }));

    //   const { error: vehicleError } = await supabase
    //     .from("vehicles")
    //     .insert(formattedVehicles);

    //   if (vehicleError) {
    //     console.error("Vehicle insert error:", vehicleError);
    //     return NextResponse.json(
    //       { error: "Failed to insert vehicles" },
    //       { status: 500 }
    //     );
    //   }
    // }

    if (vehicles && vehicles.length > 0) {

  // 1️⃣ Delete old vehicles for this lead
  const { error: deleteError } = await supabase
    .from("vehicles")
    .delete()
    .eq("lead_id", leadId);

  if (deleteError) {
    console.error("Vehicle delete error:", deleteError);
    return NextResponse.json(
      { error: deleteError.message },
      { status: 500 }
    );
  }

  // 2️⃣ Insert new vehicles
  const formattedVehicles = vehicles.map((v: any) => ({
    lead_id: leadId,
    vehicle_make: v.vehicleMake ?? null,
    vehicle_model: v.vehicleModel ?? null,
    vehicle_year: v.vehicleYear ?? null,
    primary_use: v.primaryUse ?? null,
    coverage: v.coverage ?? null,
    mileage: v.mileage ?? null,
    ownership: v.ownership ?? null,
  }));

  const { error: vehicleError } = await supabase
    .from("vehicles")
    .insert(formattedVehicles);

  if (vehicleError) {
    console.error("Vehicle insert error:", vehicleError);
    return NextResponse.json(
      { error: vehicleError.message },
      { status: 500 }
    );
  }

  console.log("Vehicles inserted successfully for lead:", leadId);
}

    return NextResponse.json({
  success: true,
  lead: leadData,
});


  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
