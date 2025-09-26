// src/declarations/my-canister/my_canister.did.js
export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    greet: IDL.Func([], [IDL.Text], []),
    saveReservation: IDL.Func(
      [
        IDL.Record({
          name: IDL.Text,
          phoneNumber: IDL.Text,
          serviceType: IDL.Text,
          dateTime: IDL.Text,
          branch: IDL.Text
        })
      ],
      [],
      []
    ),
    getBranches: IDL.Func([], [IDL.Vec(IDL.Text)], ['query'])
  });
};
