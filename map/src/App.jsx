import { useState } from "react";
import map from "./assets/astana.png";

export default function App() {
  const [selected, setSelected] = useState(null);

  const districts = [
    {
      name: "Сарыарка",
      legal: 5,
      illegal: 9,
      top: "28%",
      left: "16%",
    },
    {
      name: "Байконур",
      legal: 4,
      illegal: 6,
      top: "10%",
      left: "38%",
    },
    {
      name: "Алматы",
      legal: 3,
      illegal: 7,
      top: "38%",
      left: "62%",
    },
    {
      name: "Есиль",
      legal: 8,
      illegal: 2,
      top: "67%",
      left: "42%",
    },
    {
      name: "Нура",
      legal: 6,
      illegal: 5,
      top: "52%",
      left: "18%",
    },
  ];

  const getFreedomLevel = (district) => {
    const total = district.legal + district.illegal;
    const percent = Math.round((district.legal / total) * 100);

    if (percent >= 70) return "Высокий";
    if (percent >= 45) return "Средний";
    return "Низкий";
  };

  const getConclusion = (district) => {
    if (district.legal > district.illegal) {
      return "В районе больше легального искусства. Это говорит о наличии разрешённых площадок и более институциональной форме самовыражения.";
    }

    if (district.illegal > district.legal) {
      return "В районе преобладает нелегальный стрит-арт. Это может указывать на спонтанное самовыражение и нехватку официальных пространств для искусства.";
    }

    return "Легальное и нелегальное искусство распределены почти равномерно. Район показывает смешанный характер визуального самовыражения.";
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #020617 0%, #061225 100%)",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "30px",
        }}
      >
        Карта стрит-арта
      </h1>

      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "68%",
            background: "rgba(15, 23, 42, 0.7)",
            borderRadius: "28px",
            padding: "18px",
            boxShadow: "0 0 30px rgba(0,0,0,0.35)",
          }}
        >
          <img
            src={map}
            alt="Карта Астаны"
            style={{
              width: "100%",
              borderRadius: "22px",
              display: "block",
            }}
          />

          {districts.map((district) => (
            <div
              key={district.name}
              onClick={() => setSelected(district)}
              style={{
                position: "absolute",
                top: district.top,
                left: district.left,
                width: "120px",
                height: "120px",
                cursor: "pointer",
                borderRadius: "50%",
                background:
                  selected?.name === district.name
                    ? "rgba(34, 211, 238, 0.18)"
                    : "transparent",
                boxShadow:
                  selected?.name === district.name
                    ? "0 0 30px rgba(34, 211, 238, 0.6)"
                    : "none",
                transition: "0.3s",
              }}
            />
          ))}
        </div>

        <div
          style={{
            width: "32%",
            background: "rgba(15, 23, 42, 0.78)",
            padding: "26px",
            borderRadius: "28px",
            boxShadow: "0 0 30px rgba(0,0,0,0.35)",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {selected ? (
            <>
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#67e8f9",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Выбранный район
                </p>
                <h2
                  style={{
                    marginTop: "10px",
                    marginBottom: 0,
                    fontSize: "40px",
                    color: "#22d3ee",
                  }}
                >
                  {selected.name}
                </h2>
              </div>

              <div
                style={{
                  background: "rgba(34,197,94,0.08)",
                  padding: "18px",
                  borderRadius: "18px",
                  border: "1px solid rgba(34,197,94,0.25)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#86efac",
                    fontSize: "14px",
                  }}
                >
                  Легальное искусство
                </p>
                <h3
                  style={{
                    margin: "8px 0 0 0",
                    fontSize: "34px",
                    color: "#22c55e",
                  }}
                >
                  {selected.legal}
                </h3>
              </div>

              <div
                style={{
                  background: "rgba(239,68,68,0.08)",
                  padding: "18px",
                  borderRadius: "18px",
                  border: "1px solid rgba(239,68,68,0.25)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#fca5a5",
                    fontSize: "14px",
                  }}
                >
                  Нелегальное искусство
                </p>
                <h3
                  style={{
                    margin: "8px 0 0 0",
                    fontSize: "34px",
                    color: "#ef4444",
                  }}
                >
                  {selected.illegal}
                </h3>
              </div>

              <div
                style={{
                  background: "rgba(59,130,246,0.08)",
                  padding: "18px",
                  borderRadius: "18px",
                  border: "1px solid rgba(59,130,246,0.25)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#93c5fd",
                    fontSize: "14px",
                  }}
                >
                  Уровень свободы самовыражения
                </p>
                <h3
                  style={{
                    margin: "8px 0 0 0",
                    fontSize: "30px",
                    color: "#60a5fa",
                  }}
                >
                  {getFreedomLevel(selected)}
                </h3>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  padding: "18px",
                  borderRadius: "18px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: "10px",
                    color: "#cbd5e1",
                    fontSize: "14px",
                  }}
                >
                  Аналитический вывод
                </p>
                <p
                  style={{
                    margin: 0,
                    lineHeight: "1.6",
                    color: "#e2e8f0",
                    fontSize: "15px",
                  }}
                >
                  {getConclusion(selected)}
                </p>
              </div>
            </>
          ) : (
            <div
              style={{
                margin: "auto 0",
                textAlign: "center",
                color: "#cbd5e1",
              }}
            >
              <h2 style={{ marginBottom: "12px" }}>Выбери район</h2>
              <p style={{ lineHeight: "1.6" }}>
                Нажми на одну из зон на карте, чтобы увидеть данные о легальном и
                нелегальном стрит-арте и получить краткий вывод по району.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}