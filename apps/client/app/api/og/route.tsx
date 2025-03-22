import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Get image configuration from search params
    const width = searchParams.has("width")
      ? parseInt(searchParams.get("width") || "1200", 10)
      : 1200;
    const height = searchParams.has("height")
      ? parseInt(searchParams.get("height") || "630", 10)
      : 630;

    const imageData = await fetch(
      new URL("../../../public/genii-white.svg", import.meta.url)
    ).then((res) => res.arrayBuffer());

    // Convert to base64 for use in img tag
    const base64Image = `data:image/svg+xml;base64,${Buffer.from(imageData).toString("base64")}`;

    const hasTitle = searchParams.has("title");
    const hasSubtitle = searchParams.has("subtitle");

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 50)
      : "Genii Learning Platform";
    const subtitle = hasSubtitle
      ? searchParams.get("subtitle")?.slice(0, 100)
      : "Expand your knowledge with our interactive courses";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #121212 0%, #2a2a2a 100%)",
            padding: "60px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Monochrome background elements */}
          <div
            style={{
              position: "absolute",
              top: "-100px",
              left: "-100px",
              width: "500px",
              height: "500px",
              borderRadius: "100%",
              background: "rgba(40, 40, 40, 0.8)",
              filter: "blur(90px)",
              opacity: "0.5",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-150px",
              right: "-80px",
              width: "600px",
              height: "600px",
              borderRadius: "100%",
              background: "rgba(60, 60, 60, 0.6)",
              filter: "blur(100px)",
              opacity: "0.4",
            }}
          />

          {/* Small decorative elements - mostly monochrome */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                borderRadius: "50%",
                background:
                  i % 7 === 0 ? "#5c5cff" : "rgba(255, 255, 255, 0.6)",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.4)",
                zIndex: "1",
              }}
            />
          ))}

          {/* Clean monochrome container - no glassmorphism */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "85%",
              padding: "50px 60px",
              borderRadius: "16px",
              background: "#1a1a1a",
              border: "1px solid #333333",
              boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.7)",
              zIndex: "10",
              position: "relative",
            }}
          >
            {/* Subtle accent line */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "2px",
                background: "#333333",
              }}
            />

            <img
              src={base64Image}
              width="140"
              height="140"
              style={{
                marginBottom: "32px",
                filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.4))",
              }}
            />

            <h1
              style={{
                color: "white",
                fontSize: "58px",
                fontWeight: "800",
                textAlign: "center",
                marginTop: "0px",
                marginBottom: "16px",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              {title}
            </h1>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: "26px",
                textAlign: "center",
                maxWidth: "800px",
                marginTop: "0px",
                fontWeight: "500",
                lineHeight: "1.4",
              }}
            >
              {subtitle}
            </p>

            {/* Subtle accent dots with minimal color */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "30px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: i === 1 ? "#5c5cff" : "#777777",
                    opacity: 0.8,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Genii watermark */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "60px",
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "0.08em",
            }}
          >
            genii
          </div>
        </div>
      ),
      {
        width,
        height,
        emoji: "openmoji",
      }
    );
  } catch (error: any) {
    console.error(error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
