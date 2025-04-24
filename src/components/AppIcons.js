export default function AppIcons() {
  return (
    <div style={{ display: "flex", gap: 5, margin: 10 }}>
      <div
        style={{
          borderStyle: "solid",
          borderColor: "gray",
          backgroundColor: "black",
          borderRadius: 25,
          borderWidth: 1,
          display: "flex",
          gap: 5,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 6,
          paddingBottom: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/apple.png" alt="icon" width={30} height={30} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "0.7rem", color: "gray" }}>
            Download on the
          </div>
          <div style={{ fontSize: "1 rem", color: "white" }}>App Store </div>
        </div>
      </div>

      <div
        style={{
          borderStyle: "solid",
          borderColor: "gray",
          backgroundColor: "black",
          borderRadius: 25,
          borderWidth: 1,
          display: "flex",
          gap: 5,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 6,
          paddingBottom: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/playstore-icon.png" alt="icon" width={30} height={30} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "0.7rem", color: "gray" }}>Get it on</div>
          <div style={{ fontSize: "1 rem", color: "white" }}>Google Play </div>
        </div>
      </div>
    </div>
  );
}
