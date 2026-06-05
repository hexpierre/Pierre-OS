// ─────────────────────────────────────────────────────────────
// Pierre OS — Dashboard Data
// Edit this file, then refresh the browser to see changes.
// ─────────────────────────────────────────────────────────────

const PierreOSData = {

  // ── DASHBOARD ────────────────────────────────────────────────
  dashboard: {

    today: [
      {
        title: "Verify Richard Summers on LinkedIn",
        date: "2026-06-05", timeBlock: "—", status: "Planned",
        type: "Outreach — Verify Only", relatedProject: "Future Business Ideas",
        relatedIdea: "Richard Summers - Mentorship Outreach", priority: "Medium",
        objective: "Find and confirm Richard Summers' LinkedIn profile and website. Verification only — outreach is scheduled for w/c 2026-06-16.",
        firstStep: "Search LinkedIn for 'Richard Summers Excel' and cross-reference with his website.",
        notes: "Do not reach out yet. Just confirm the right person and note the profile URL."
      }
    ],

    thisWeek: [
      {
        title: "Verify Richard Summers on LinkedIn",
        date: "2026-06-05", timeBlock: "—", status: "Planned",
        type: "Outreach — Verify Only", relatedProject: "Future Business Ideas",
        relatedIdea: "Richard Summers - Mentorship Outreach", priority: "Medium",
        objective: "Confirm the right person on LinkedIn. Outreach follows w/c 2026-06-16.",
        firstStep: "Search LinkedIn for 'Richard Summers Excel' and cross-reference with his website.",
        notes: "Verify only this week."
      },
      {
        title: "SQL Learning Journey — Weekend Session",
        date: "2026-06-07", timeBlock: "Weekend", status: "Planned",
        type: "Exploration / Learning", relatedProject: "SQL Learning Journey",
        relatedIdea: "", priority: "Medium",
        objective: "Use the learning lab set up this morning to do a first exploratory SQL session.",
        firstStep: "Open the learning lab and explore. Run some queries. See what comes up.",
        notes: "Keep it light — curiosity session, not a study grind."
      }
    ],

    activeExplorations: [
      {
        title: "SQL Learning Journey — Weekend Session",
        date: "2026-06-07", timeBlock: "Weekend", status: "Active",
        type: "Exploration / Learning", relatedProject: "SQL Learning Journey",
        relatedIdea: "", priority: "Medium",
        objective: "Use the learning lab set up this morning to do a first exploratory SQL session over the weekend.",
        firstStep: "Open the learning lab and just explore. Run some queries.",
        notes: "No pressure. Curiosity-driven."
      },
      {
        title: "Sheet Expiry / Protection Fail-Safe",
        date: "2026-06-09", timeBlock: "Next Week", status: "Planned",
        type: "Research / Exploration", relatedProject: "Future Business Ideas",
        relatedIdea: "Sheet Expiry - Protection Fail-Safe", priority: "High",
        objective: "Explore practical ways to protect client-facing Excel tools using expiry, licensing, or access-control logic.",
        firstStep: "Research VBA-based date locks, password expiry, and external licence checks.",
        notes: "Richard Summers outreach happens w/c 2026-06-16 — he may have answers too."
      }
    ],

    backlog: [],

    projectFocus: [
      {
        title: "SQL Learning Journey", status: "Active", type: "Learning",
        relatedProject: "SQL Learning Journey", priority: "Medium",
        objective: "Build SQL knowledge through the learning lab. Weekend session scheduled.",
        firstStep: "Weekend exploratory session using the learning lab set up today.", notes: ""
      },
      {
        title: "Future Business Ideas", status: "Active", type: "Exploration",
        relatedProject: "Future Business Ideas", priority: "High",
        objective: "Explore sheet expiry/protection options and the Richard Summers mentorship angle.",
        firstStep: "Verify Richard Summers this week. Sheet Expiry research next week. Outreach w/c 2026-06-16.", notes: ""
      },
      {
        title: "Financial Intelligence System", status: "Parked", type: "Build",
        relatedProject: "Financial Intelligence System", priority: "High",
        objective: "Import Wizard / Dataset Mapping parked for now. Resume when focus returns to FIS.",
        firstStep: "Resume: list dataset formats that need to be supported.", notes: "Parked 2026-06-05."
      },
      {
        title: "GL Extractor", status: "Parked", type: "Build",
        relatedProject: "GL Extractor", priority: "High",
        objective: "Multi-Account Extraction parked for now.",
        firstStep: "Resume: decide on output format for multi-account extraction.", notes: "Parked 2026-06-05."
      }
    ],

    completedRecently: [
      {
        title: "Pierre OS Initial Setup", date: "2026-06-05", status: "Completed",
        type: "Admin", priority: "High",
        objective: "Set up the full Pierre OS folder structure, templates, and project files.",
        firstStep: "", notes: "All folders, templates, and 6 project workspaces created."
      },
      {
        title: "Updated Idea Format — Origin Story + Connections", date: "2026-06-05",
        status: "Completed", type: "Admin", priority: "Medium",
        objective: "Add Origin Story and Idea Connections sections to all idea entries.",
        firstStep: "", notes: "All existing ideas updated. Format saved as standard going forward."
      },
      {
        title: "Builder Dashboard + Execution Queue Created", date: "2026-06-05",
        status: "Completed", type: "Build", priority: "High",
        objective: "Build the local HTML dashboard and Execution Queue folder structure.",
        firstStep: "", notes: "Live at 09 Builder Dashboard/pierre-os-dashboard.html."
      }
    ],

    parked: [
      {
        title: "Import Wizard / Dataset Mapping", date: "2026-06-05", status: "Parked",
        type: "Exploration", relatedProject: "Financial Intelligence System",
        relatedIdea: "Import Wizard / Dataset Mapping", priority: "High",
        objective: "Define how users could map incoming datasets to a standard schema in FIS.",
        firstStep: "List the different dataset formats that need to be supported first.",
        notes: "Parked 2026-06-05. Resume when focus returns to Financial Intelligence System."
      },
      {
        title: "Multi-Account Extraction", date: "2026-06-05", status: "Parked",
        type: "Build / Exploration", relatedProject: "GL Extractor",
        relatedIdea: "Multi-Account Extraction", priority: "High",
        objective: "Explore how GL Extractor could process multiple accounts in one run.",
        firstStep: "Decide on output format — separate files, merged, or both.",
        notes: "Parked 2026-06-05. Resume when GL Extractor work picks back up."
      },
      {
        title: "Richard Summers — LinkedIn Outreach", date: "2026-06-16",
        timeBlock: "w/c 2026-06-16", status: "Scheduled",
        type: "Outreach", relatedProject: "Future Business Ideas",
        relatedIdea: "Richard Summers - Mentorship Outreach", priority: "Medium",
        objective: "Send a short genuine message to Richard Summers on LinkedIn.",
        firstStep: "Profile verified this week → draft message → send w/c 2026-06-16.",
        notes: "Sitting here until the week of 2026-06-16."
      }
    ]

  },

  // ── IDEAS ────────────────────────────────────────────────────
  ideas: [
    {
      id: "sheet-expiry",
      title: "Sheet Expiry / Protection Fail-Safe",
      date: "2026-06-05",
      status: "Active",
      type: "Research / Exploration",
      potentialValue: "High",
      relatedProjects: ["Future Business Ideas"],
      summary: "Build a mechanism into client-delivered Excel sheets that locks, expires, or disables the sheet if a client doesn't pay or renew their annual subscription. Turns a one-time deliverable into something that enforces a recurring revenue model.",
      nextAction: "Research VBA-based date locks, password expiry, and external licence checks. Identify the most practical approach for a small client base.",
      originStory: {
        why: "Thinking about the business model for selling custom Excel tools to clients — without a protection mechanism there's no recurring revenue lever.",
        problem: "How do you enforce subscription renewals or payment compliance on a delivered Excel file?",
        conversation: "Pierre OS dictation session, 2026-06-05 — arose in the context of exploring custom Excel sheet work and the Richard Summers mentorship angle."
      },
      ideaConnections: [
        "Directly tied to the Richard Summers outreach — ask him whether he uses anything like this or how he handles client renewals.",
        "Relevant to Future Business Ideas — this is the monetisation/protection layer for any Excel-based product.",
        "Could apply to Financial Intelligence System or Inventory Engine if either is eventually delivered as a client-facing Excel tool."
      ]
    },
    {
      id: "import-wizard",
      title: "Import Wizard / Dataset Mapping",
      date: "2026-06-05",
      status: "Parked",
      type: "Exploration",
      potentialValue: "High",
      relatedProjects: ["Financial Intelligence System"],
      summary: "An import wizard or mapping setup inside the Financial Intelligence System that handles different dataset formats. Lets the system map incoming data fields to a standard schema, making it easy to ingest data from multiple sources without manual reformatting.",
      nextAction: "Define what dataset types need to be supported first. Sketch the mapping UI/flow.",
      originStory: {
        why: "Different data sources have different column names, formats, and structures. A mapping layer means the rest of the system stays clean regardless of what comes in.",
        problem: "The friction of manually reformatting datasets before they can be used by the Financial Intelligence System.",
        conversation: "First Pierre OS dictation session, 2026-06-05."
      },
      ideaConnections: [
        "Could pair with Multi-Account Extraction — if GL data comes from multiple accounts, a mapping layer would help normalise it before analysis.",
        "Likely a prerequisite for any automated reporting or intelligence features downstream in FIS."
      ]
    },
    {
      id: "multi-account-extraction",
      title: "Multi-Account Extraction",
      date: "2026-06-05",
      status: "Parked",
      type: "Build / Exploration",
      potentialValue: "High",
      relatedProjects: ["GL Extractor"],
      summary: "Extend the GL Extractor to support extraction across multiple accounts in a single run. Rather than running the extractor once per account, the tool accepts multiple targets and processes them together — separate outputs or a merged result.",
      nextAction: "Clarify the expected output format — separate files per account, one merged file, or both as options.",
      originStory: {
        why: "Running the extractor once per account is repetitive and doesn't scale when dealing with multiple entities.",
        problem: "The manual overhead of single-account-at-a-time extraction.",
        conversation: "First Pierre OS dictation session, 2026-06-05."
      },
      ideaConnections: [
        "Connects to Import Wizard / Dataset Mapping — extracted GL data from multiple accounts needs a mapping layer to normalise before analysis.",
        "Multi-account output could feed directly into the Financial Intelligence System as a unified data source."
      ]
    },
    {
      id: "richard-summers-outreach",
      title: "Mentorship Outreach — Richard Summers",
      date: "2026-06-05",
      status: "Planned",
      type: "Networking / Mentorship",
      potentialValue: "High",
      relatedProjects: ["Future Business Ideas"],
      summary: "Richard Summers is a LinkedIn creator who specialises in building custom Excel sheets for clients. He has a website and a strong LinkedIn presence. The opportunity is to reach out, start a conversation, and pick his brain on building complex Excel tools, growing on LinkedIn, and how he handles client renewals.",
      nextAction: "Verify profile on LinkedIn this week (w/c 2026-06-02). Draft outreach message. Send w/c 2026-06-16.",
      originStory: {
        why: "Spotted on LinkedIn — his work building custom Excel tools for clients is directly relevant to what's being explored.",
        problem: "Looking for people who have already built a business around specialised data/spreadsheet tools and figured out how to market and sell it.",
        conversation: "Pierre OS dictation session, 2026-06-05."
      },
      ideaConnections: [
        "Connects to Future Business Ideas — his business model (custom Excel tools for clients) could be a direct template.",
        "Relevant to Sheet Expiry idea — ask him how he handles client renewals and sheet protection.",
        "His LinkedIn approach could inform how to build an audience around technical tools."
      ]
    }
  ],

  // ── PROJECTS ─────────────────────────────────────────────────
  projects: [
    {
      id: "firmview",
      name: "FirmView",
      emoji: "🏢",
      status: "Active",
      description: "A business intelligence or firm management tool. Core scope to be defined.",
      currentFocus: "Defining the project scope and core feature set.",
      nextAction: "Add project context — what does FirmView do and who is it for?",
      relatedIdeas: [],
      notes: "",
      lastUpdated: "2026-06-05"
    },
    {
      id: "financial-intelligence-system",
      name: "Financial Intelligence System",
      emoji: "💰",
      status: "Active",
      description: "A system for intelligent financial data ingestion, mapping, and reporting. Handles data from multiple sources through a standardised pipeline.",
      currentFocus: "Import Wizard / Dataset Mapping concept — currently parked.",
      nextAction: "Resume Import Wizard: list the dataset formats that need to be supported.",
      relatedIdeas: ["Import Wizard / Dataset Mapping"],
      notes: "Import Wizard idea parked 2026-06-05. Will resume when FIS is back in focus.",
      lastUpdated: "2026-06-05"
    },
    {
      id: "inventory-engine",
      name: "Inventory Engine",
      emoji: "📦",
      status: "Active",
      description: "An inventory management tool. Core functionality to be defined.",
      currentFocus: "Project scope definition.",
      nextAction: "Define the core problem this solves and who it's built for.",
      relatedIdeas: [],
      notes: "",
      lastUpdated: "2026-06-05"
    },
    {
      id: "gl-extractor",
      name: "GL Extractor",
      emoji: "🔍",
      status: "Active",
      description: "A tool for extracting General Ledger data. Currently single-account — multi-account extraction is a planned enhancement.",
      currentFocus: "Multi-Account Extraction — currently parked.",
      nextAction: "Resume: decide on output format for multi-account extraction (separate files, merged, or both).",
      relatedIdeas: ["Multi-Account Extraction"],
      notes: "Multi-Account Extraction parked 2026-06-05.",
      lastUpdated: "2026-06-05"
    },
    {
      id: "sql-learning-journey",
      name: "SQL Learning Journey",
      emoji: "🗄️",
      status: "Active",
      description: "A personal learning project to build real SQL skills through hands-on practice using a learning lab environment.",
      currentFocus: "First weekend exploration session — learning lab set up 2026-06-05.",
      nextAction: "Complete the weekend SQL session. Note what was explored and what to build on next.",
      relatedIdeas: [],
      notes: "Hands-on approach over structured course. Learning lab set up 2026-06-05.",
      lastUpdated: "2026-06-05"
    },
    {
      id: "future-business-ideas",
      name: "Future Business Ideas",
      emoji: "💡",
      status: "Active",
      description: "Exploration space for potential business directions — custom Excel tools, sheet protection models, and building an audience for technical work.",
      currentFocus: "Sheet Expiry / Protection Fail-Safe and Richard Summers mentorship outreach.",
      nextAction: "Verify Richard Summers on LinkedIn this week. Sheet Expiry research next week.",
      relatedIdeas: ["Sheet Expiry / Protection Fail-Safe", "Mentorship Outreach — Richard Summers"],
      notes: "",
      lastUpdated: "2026-06-05"
    },
    {
      id: "pierre-os",
      name: "Pierre OS",
      emoji: "⚡",
      status: "Active",
      description: "My personal operating system for capturing ideas, managing projects, and building daily knowledge. Lives in OneDrive. Managed by Claude.",
      currentFocus: "Multi-view Builder Dashboard — Dashboard, Ideas, Projects, Queue, Reviews.",
      nextAction: "Keep using Pierre OS daily. Let it grow through regular dictation.",
      relatedIdeas: [],
      notes: "Multi-view dashboard built 2026-06-05.",
      lastUpdated: "2026-06-05"
    }
  ],

  // ── REVIEWS ──────────────────────────────────────────────────
  reviews: {
    weekly: [],
    monthly: [],
    archive: []
  }

};
