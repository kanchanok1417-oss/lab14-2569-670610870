import type { Registrant } from "../libs/Registrant";

export default function UserRegisterCard({
  fullName,
  gender,
  plan,
  total,
  extraItems,
}: Registrant) {
  const items = extraItems ?? [];   

  return (
    <div className="card p-3 mb-3">
      <div className="d-flex flex-row justify-content-between align-items-start">
        <div>
          <div className="fw-bold">{fullName}</div>
          <div className="text-muted">
            {plan} · {gender === "male" ? "👨 Male" : "👩 Female"}
          </div>
        </div>
        <div className="fs-5">{total.toLocaleString()} THB</div>
      </div>

      {items.length > 0 && (
        <div className="mt-2 d-flex gap-2 flex-wrap">
          {items.map((label) => (
            <span key={label} className="badge border text-dark bg-white">
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}