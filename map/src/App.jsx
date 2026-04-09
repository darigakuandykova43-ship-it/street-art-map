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
      legalReason:
        "В районе есть отдельные официально согласованные муралы и проекты, поддерживаемые городскими инициативами.",
      illegalReason:
        "Большое количество нелегального стрит-арта связано со спонтанным самовыражением и нехваткой специально разрешённых поверхностей.",
      summary:
        "Район показывает высокую неформальную творческую активность.",
    },
    {
      name: "Байконур",
      legal: 4,
      illegal: 6,
      top: "10%",
      left: "38%",
      legalReason:
        "Часть объектов появляется в рамках организованных городских или коммерческих проектов.",
      illegalReason:
        "Нелегальные работы возникают там, где авторы хотят высказываться без официального согласования и быстрее реагировать на городскую среду.",
      summary:
        "В районе заметно больше неформального самовыражения, чем официального искусства.",
    },
    {
      name: "Алматы",
      legal: 3,
      illegal: 7,
      top: "38%",
      left: "62%",
      legalReason:
        "Разрешённые объекты здесь встречаются реже и обычно появляются как часть благоустройства.",
      illegalReason:
        "Преобладание нелегального стрит-арта может говорить о стремлении жителей и художников самостоятельно присваивать пространство.",
      summary:
        "Район отражает спонтанное и более свободное, но неинституциональное самовыражение.",
    },
    {
      name: "Есиль",
      legal: 8,
      illegal: 2,
      top: "67%",
      left: "42%",
      legalReason:
        "В районе чаще развиваются согласованные визуальные проекты: муралы, декоративные фасады и официальные арт-объекты.",
      illegalReason:
        "Нелегальных вмешательств меньше из-за более контролируемой и регламентированной городской среды.",
      summary:
        "Район показывает высокую долю институционально поддерживаемого искусства.",
    },
    {
      name: "Нура",
      legal: 6,
      illegal: 5,
      top: "52%",
      left: "18%",
      legalReason:
        "Здесь есть заметное присутствие официально разрешённых художественных объектов.",
      illegalReason:
        "Одновременно сохраняется и спонтанный уличный язык, что говорит о смешанном характере визуальной среды.",
      summary:
        "Район находится между официальным художественным оформлением и неформальным самовыражением.",
    },
  ];

  const getPercent = (district) => {
    return Math.round(
      (district.legal / (district.legal + district.illegal)) * 100
    );
  };

  const getFreedomLevel = (district) => {
    const percent = getPercent(district);

    if (percent >= 70) return "Высокий уровень официальной свободы";
    if (percent >= 45) return "Смешанный уровень";
    return "Высокий уровень неформального самовыражения";
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #020617 0%, #061225 100%)",
        color: "white",
        minHeight: "100vh",
        width: "100%",
        padding: "32px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <h1
            style={{
              fontSize: "48px",
              marginTop: 0,
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            Стрит-арт карта Астаны
          </h1>

          <p
            style={{
              opacity: 0.8,
              maxWidth: "760px",
              margin: "0 auto",
              textAlign: "center",
              lineHeight: "1.6",
              fontSize: "20px",
            }}
          >
            Визуализация распределения легального и нелегального стрит-арта по
            районам города. Карта показывает, как разные формы уличного
            искусства отражают степень свободы самовыражения в городской среде.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
            fontSize: "20px",
          }}
        >
          <span>🟢 Легально</span>
          <span>🔴 Нелегально</span>
          <span>🔵 Выбранный район</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              position: "relative",
              flex: "1 1 780px",
              minWidth: "320px",
              background: "rgba(15, 23, 42, 0.72)",
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
                display: "block",
                borderRadius: "22px",
              }}
            />

            {districts.map((d) => (
              <div
                key={d.name}
                onClick={() => setSelected(d)}
                title={d.name}
                style={{
                  position: "absolute",
                  top: d.top,
                  left: d.left,
                  width: "120px",
                  height: "120px",
                  cursor: "pointer",
                  borderRadius: "50%",
                  transition: "0.3s",
                  background:
                    selected?.name === d.name
                      ? "rgba(34,211,238,0.18)"
                      : "transparent",
                  boxShadow:
                    selected?.name === d.name
                      ? "0 0 35px rgba(34,211,238,0.8)"
                      : "none",
                }}
              />
            ))}
          </div>

          <div
            style={{
              flex: "0 1 420px",
              minWidth: "320px",
              background: "#0f172a",
              padding: "24px",
              borderRadius: "28px",
              boxShadow: "0 0 30px rgba(0,0,0,0.35)",
            }}
          >
            {selected ? (
              <>
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: "10px",
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
                    color: "#22d3ee",
                    marginTop: 0,
                    marginBottom: "18px",
                    fontSize: "44px",
                  }}
                >
                  {selected.name}
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(34,197,94,0.1)",
                      padding: "16px",
                      borderRadius: "16px",
                      border: "1px solid rgba(34,197,94,0.25)",
                    }}
                  >
                    <p style={{ margin: 0, color: "#86efac", fontSize: "14px" }}>
                      Легально
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
                      background: "rgba(239,68,68,0.1)",
                      padding: "16px",
                      borderRadius: "16px",
                      border: "1px solid rgba(239,68,68,0.25)",
                    }}
                  >
                    <p style={{ margin: 0, color: "#fca5a5", fontSize: "14px" }}>
                      Нелегально
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
                </div>

                <div
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    padding: "16px",
                    borderRadius: "16px",
                    border: "1px solid rgba(59,130,246,0.25)",
                    marginBottom: "18px",
                  }}
                >
                  <p style={{ margin: 0, color: "#93c5fd", fontSize: "14px" }}>
                    Индикатор свободы
                  </p>
                  <h3
                    style={{
                      margin: "8px 0 6px 0",
                      fontSize: "32px",
                      color: "#60a5fa",
                    }}
                  >
                    Свобода: {getPercent(selected)}%
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "#dbeafe",
                      lineHeight: "1.5",
                    }}
                  >
                    {getFreedomLevel(selected)}
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    padding: "16px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    marginBottom: "16px",
                  }}
                >
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Почему искусство разрешено
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      opacity: 0.85,
                      lineHeight: "1.6",
                    }}
                  >
                    {selected.legalReason}
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    padding: "16px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    marginBottom: "16px",
                  }}
                >
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Почему появляется нелегальный стрит-арт
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      opacity: 0.85,
                      lineHeight: "1.6",
                    }}
                  >
                    {selected.illegalReason}
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    padding: "16px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Вывод по району
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      opacity: 0.9,
                      lineHeight: "1.6",
                    }}
                  >
                    {selected.summary}
                  </p>
                </div>
              </>
            ) : (
              <div style={{ lineHeight: "1.7", opacity: 0.85 }}>
                <h2 style={{ marginTop: 0 }}>Выбери район</h2>
                <p>
                  Нажми на одну из зон на карте, чтобы увидеть соотношение
                  легального и нелегального стрит-арта, а также краткий анализ
                  городской среды.
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            marginTop: "36px",
            background: "rgba(15, 23, 42, 0.72)",
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 0 30px rgba(0,0,0,0.25)",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              fontSize: "32px",
              textAlign: "center",
            }}
          >
            О проекте
          </h3>

          <p
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              textAlign: "center",
              lineHeight: "1.7",
              opacity: 0.85,
              fontSize: "18px",
            }}
          >
            Проект исследует распределение стрит-арта в городской среде и
            показывает, как уровень легальности влияет на свободу
            самовыражения. Легальное искусство обычно связано с согласованными
            инициативами и поддержкой со стороны города, а нелегальное —
            со спонтанной творческой активностью и желанием художников
            самостоятельно высказываться в пространстве города.
          </p>
        </div>
      </div>
    </div>
  );
}