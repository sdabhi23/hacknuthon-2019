const problems = {
  defense: [
    "Audio scrambling based encoding algorithm",
    "Video stabilization for unmanned aerial vehicles",
    "Apply ML to daily decisions in the field of defense, like whether or not a paticular equipment is fit for use",
    "Predict the path of a projectile based on various parameters for precision in aiming",
    ""
  ],
  travel: [
    "AR/VR based travel brochures",
    "Network connectivity for remote locations",
    "Virtual guides",
    "Using artificial intelligence for a personalized travel experience"
  ],
  healthcare: [
    "AI-based systems to detect diseases in their early stages",
    "Identifying symptoms based on Image processing",
    "Hygiene measuring devices",
    "IoT based Emergency response system"
  ],
  agriculture: [
    "A digitalised agri-supply chain",
    "Automation in agriculture",
    "A GIS (geographic information system) surveying/mapping for precision agriculture",
    "Data-driven farming using sensors on crops and farm machinery"
  ],
  industry: [
    "IoT based product monitoring system",
    "Using deep learning algorithms to detect product details from packaging label",
    "IoT based logistics management"
  ],
  education: [
    "Digital portfolios to measure a child's progress",
    "Using AR/VR to create interactive material",
    "Simulation-based training programs",
    "Adaptive virtual labs using AI"
  ]
};

const titles = {
  travel: "Travel / Tourism",
  education: "Education",
  agriculture: "Agriculture",
  industry: "Industrial Automation",
  healthcare: "Healthcare",
  defense: "Defense"
};

$("#track_modal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget);
  var name = button.data("track");
  var modal = $(this);
  var content = `<h5>Suggested problem statements:</h5>\n<br/>\n<ol>\n`;
  problems[name].forEach(elem => {
    content = content + `<li>${elem}</li>\n`;
  });
  content =
    content +
    `</ol>\n<p>There are just a few suggested problem statements for your refrence. We would suggest you to identify and resolve any problem you come across or feel is relevant in this domain.</p>`;
  modal.find(".modal-title").text(titles[name]);
  modal.find(".modal-body").html(content);
});
