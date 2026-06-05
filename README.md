# Pierre OS — Builder Dashboard

A personal command centre. Local, offline, no dependencies. Open it in your browser and see everything in one place.

---

## How to Open

1. Navigate to `09 Builder Dashboard` in your NoteBook folder
2. Double-click `pierre-os-dashboard.html`
3. It opens in your browser — no setup, no server, no internet required
4. Press **F5** or click **↺ Refresh** after any data update

---

## The Five Views

| Tab | What It Shows |
|---|---|
| **Dashboard** | At-a-glance: Today, This Week, Active Explorations, Backlog, Project Focus, Completed, Parked |
| **Ideas** | Full ideas library with search + filters. Each idea expands to show Summary, Next Action, Origin Story, and Idea Connections |
| **Projects** | All 7 projects as cards with current focus, related ideas count, and next action |
| **Execution Queue** | All execution items grouped into collapsible sections: Today / This Week / Active / Backlog / Parked / Completed |
| **Reviews** | Placeholder for Weekly Reviews, Monthly Reviews, and Archive — populates as reviews are completed |

---

## The Two Files

| File | Role |
|---|---|
| `pierre-os-dashboard.html` | The app — layout, styles, and all rendering logic |
| `dashboard-data.js` | All the data — edit this file to update anything in the app |

---

## Data Structure

```javascript
const PierreOSData = {

  dashboard: {
    today:              [],  // What to focus on right now
    thisWeek:           [],  // Items scheduled this week
    activeExplorations: [],  // Currently active or planned
    backlog:            [],  // Unscheduled, waiting
    projectFocus:       [],  // High-level project status cards
    completedRecently:  [],  // Done items
    parked:             []   // Intentionally paused
  },

  ideas: [
    {
      id:              "unique-id",
      title:           "Idea title",
      date:            "YYYY-MM-DD",
      status:          "New / Active / Parked / Planned / Completed",
      type:            "Exploration / Build / Research / Networking",
      potentialValue:  "Low / Medium / High",
      relatedProjects: ["Project Name"],
      summary:         "What the idea is.",
      nextAction:      "The most useful thing to do next.",
      originStory: {
        why:          "Why the idea occurred.",
        problem:      "What problem triggered it.",
        conversation: "What conversation or moment sparked it."
      },
      ideaConnections: [
        "How this connects to other ideas or projects."
      ]
    }
  ],

  projects: [
    {
      id:           "project-id",
      name:         "Project Name",
      emoji:        "🏢",
      status:       "Active / Parked / Complete",
      description:  "What this project is.",
      currentFocus: "What it's focused on right now.",
      nextAction:   "The most useful next step.",
      relatedIdeas: ["Idea title"],
      notes:        "Any extra context.",
      lastUpdated:  "YYYY-MM-DD"
    }
  ],

  reviews: {
    weekly:  [],  // Weekly review entries
    monthly: [],  // Monthly review entries
    archive: []   // Archived items
  }

};
```

---

## How Claude Updates the Dashboard

When you dictate a new idea or execution item, Claude will:

1. Capture the idea in `02 Jar Full of Ideas / Idea Inbox.md`
2. Determine where it belongs (active, backlog, parked, this week, etc.)
3. Update the relevant markdown file in `08 Execution Queue`
4. **Add or update the item in `dashboard-data.js`** — both the `dashboard` section and the `ideas` section if it's an idea
5. Update the relevant project in `projects` if applicable

After Claude saves `dashboard-data.js`, press **F5** to see the changes.

---

## How to Add a New Idea

Add an entry to `PierreOSData.ideas` in `dashboard-data.js`:

```javascript
{
  id: "my-new-idea",
  title: "My New Idea",
  date: "2026-06-05",
  status: "New",
  type: "Exploration",
  potentialValue: "Medium",
  relatedProjects: ["Project Name"],
  summary: "What the idea is.",
  nextAction: "First thing to do.",
  originStory: {
    why: "Why it came up.",
    problem: "What problem triggered it.",
    conversation: "What sparked it."
  },
  ideaConnections: [
    "How this connects to other ideas."
  ]
}
```

---

## Refresh vs Live Sync

**Version 1 uses browser refresh.** After any data update, press F5.

Future versions could add live sync using:
- A small local Node.js or Python watcher script
- A browser extension that auto-reloads on file save
- A `setInterval` polling mechanism in the JS

For now, refresh is simple and reliable.
