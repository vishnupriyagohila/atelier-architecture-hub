const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static('public'));

let studioData = {
  activeProjects: [
    {
      id: "PRJ-901",
      name: "The Glass Pavilion Villa",
      client: "Dr. Vikram & Shweta",
      location: "Boat Club Road, Chennai",
      budget: 35000000,
      spent: 21500000,
      phase: "Structural Glazing & Framing",
      progressPct: 68,
      status: "On Schedule"
    },
    {
      id: "PRJ-902",
      name: "Ivory Coast Penthouse",
      client: "Meera Chandran",
      location: "ECR Coastal Strip",
      budget: 18000000,
      spent: 8500000,
      phase: "Interior Drylining & Teak Joinery",
      progressPct: 45,
      status: "Pending Client Sign-off"
    },
    {
      id: "PRJ-903",
      name: "Terracotta Courtyard Estate",
      client: "Natarajan & Sons Corp",
      location: "Coimbatore Outskirts",
      budget: 52000000,
      spent: 49000000,
      phase: "Final Snagging & Ambient Handover",
      progressPct: 94,
      status: "Final Handover Phase"
    }
  ],
  procurements: [
    { item: "Carrara Calacatta Italian Marble", supplier: "Stona International", qty: "4,200 sq.ft", cost: 1890000, status: "Delivered" },
    { item: "Burmese Mature Teak Veneer Slats", supplier: "Heritage Timber Guild", qty: "180 Panels", cost: 945000, status: "In Transit" },
    { item: "Flos Architectural Concealed COB Lights", supplier: "Luce & Shadow Italia", qty: "240 Units", cost: 680000, status: "Awaiting Clearance" },
    { item: "Thermally Broken Minimalist Aluminum Profiles", supplier: "Reynaers Aluminum", qty: "32 Bays", cost: 2450000, status: "Installed" }
  ],
  milestonePayouts: [
    { contractor: "Vanguard Civil & Formwork Ltd", milestone: "Roof Slab & Cantilever Completion", amount: 1200000, approvalStatus: "Approved" },
    { contractor: "Aura Acoustics & HVAC Engineers", milestone: "VRV Piping & Duct Pressure Test", amount: 650000, approvalStatus: "Pending Sign-off" },
    { contractor: "Stoneworks Artisan Studio", milestone: "Master Bathroom Dry Cladding", amount: 480000, approvalStatus: "Under Review" }
  ]
};

app.get('/api/studio', (req, res) => res.json(studioData));

app.listen(PORT, () => console.log(`Studio Cockpit live on http://localhost:${PORT}`));