// Load Decap CMS globally
if (typeof window !== "undefined") {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms-app@^3.0.0/dist/decap-cms.js";
    script.onload = () => {
      console.log("Decap CMS Loaded");
      
      if (window.CMS) {
        window.CMS.init({
          config: "/admin/config.yml"  // ✅ Ensure correct config path
        });
  
        window.CMS.registerPreviewStyle("/previewGlobals.css");
      } else {
        console.error("Decap CMS failed to load!");
      }
    };
    document.head.appendChild(script);
  }
  