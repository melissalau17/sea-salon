export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    add_booking: IDL.Func(
      [IDL.Record({
        status: IDL.Text,
        stylist_id: IDL.Opt(IDL.Nat64),
        appointment: IDL.Text,
        service_type: IDL.Text,
        duration_minutes: IDL.Nat32,
        name: IDL.Text,
        price_cents: IDL.Nat32,
        customer_id: IDL.Nat64,
        age_group: IDL.Text,
      })],
      [IDL.Text],
      []
    ),
    recommend_for_customer: IDL.Func([IDL.Nat64], [IDL.Text], []),

    // … other methods
  });
};
