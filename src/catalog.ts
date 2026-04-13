import { z } from "zod";

// =============================================================================
// Shared validation schemas used across form components
// =============================================================================

const validationCheckSchema = z
  .array(
    z.object({
      type: z.string(),
      message: z.string(),
      args: z.record(z.string(), z.unknown()).optional(),
    }),
  )
  .nullable();

const validateOnSchema = z.enum(["change", "blur", "submit"]).nullable();

// =============================================================================
// Ant Design v6 Component Definitions
// =============================================================================

/**
 * Ant Design v6 component definitions for json-render catalogs.
 *
 * These can be used directly or extended with custom components.
 * All components are built using Ant Design v6 components.
 *
 * Note: Component APIs follow Antd v6 specifications:
 * - Use `variant` instead of deprecated `bordered` where applicable
 * - Use `orientation` instead of deprecated `direction` where applicable
 * - Use `titlePlacement` for Divider text alignment
 * - Use `expandIconPlacement` instead of deprecated `expandIconPosition`
 */
export const antdComponentDefinitions = {
  // ==========================================================================
  // Layout Components
  // ==========================================================================


  Card: {
    props: z.object({
      title: z.string().nullable(),
      extra: z.string().nullable(),
      variant: z.enum(["outlined", "borderless"]).nullable(),
      hoverable: z.boolean().nullable(),
      loading: z.boolean().nullable(),
      size: z.enum(["default", "small"]).nullable(),
      cover: z.string().nullable(),
      actions: z.array(z.string()).nullable(),
      width: z.union([z.number(), z.string()]).nullable(),
      height: z.union([z.number(), z.string()]).nullable(),
      backgroundColor: z.string().nullable(),
      borderRadius: z.union([z.number(), z.string()]).nullable(),
      boxShadow: z.string().nullable(),
      border: z.string().nullable(),
    }),
    slots: ["default", "extra", "cover", "actions"],
    events: ["click"],
    description:
      "Container for displaying information related to a single subject. Supports title, cover image, actions at bottom. Use slots.default for card body, slots.extra for header actions, slots.cover for cover image, slots.actions for action buttons. Set loading to true for skeleton loading state.",
    example: {
      title: "Overview",
      variant: "outlined",
      width: "100%",
      backgroundColor: "#ffffff",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      border: "1px solid #e8e8e8"
    },
  },

  Flex: {
    props: z.object({
      vertical: z.boolean().nullable(),
      wrap: z.boolean().nullable(),
      justify: z.string().nullable(),
      align: z.string().nullable(),
      gap: z.union([z.string(), z.number()]).nullable(),
      flex: z.string().nullable(),
    }),
    slots: ["default"],
    description:
      "Flexbox container for flexible layouts. justify accepts CSS flexbox values ('flex-start', 'center', 'flex-end', 'space-between', 'space-around'). align accepts ('flex-start', 'center', 'flex-end', 'stretch', 'baseline'). gap accepts 'small'/'middle'/'large' presets or a number in pixels.",
    example: { vertical: true, gap: "middle" },
  },

  Stack: {
    props: z.object({
      direction: z.enum(["vertical", "horizontal"]).nullable(),
      wrap: z.boolean().nullable(),
      justify: z.enum(["start", "end", "center", "space-around", "space-between", "space-evenly"]).nullable(),
      align: z.enum(["start", "center", "end", "baseline", "stretch"]).nullable(),
      gap: z.union([z.enum(["small", "middle", "large"]), z.number()]).nullable(),
    }),
    slots: ["default"],
    description:
      "Stack layout for one-directional spacing between children. Defaults to vertical (column) direction. Simpler API than Flex for common stacking patterns. gap presets: small=8px, middle=16px, large=24px.",
    example: { direction: "vertical", gap: "middle" },
  },

  Grid: {
    props: z.object({
      columns: z.number().nullable(),
      gap: z.enum(["sm", "md", "lg"]).nullable(),
      spans: z.array(z.number()).nullable(),
    }),
    slots: ["default"],
    description:
      "Simplified grid component built on Ant Design's 24-column Row/Col system. Use columns for equal-width layout (1-24 columns), or spans array for custom widths per child (e.g., [8, 16] for 1/3 + 2/3 split).",
    example: { columns: 3, gap: "md" },
  },

  Row: {
    props: z.object({
      gutter: z.union([z.number(), z.tuple([z.number(), z.number()])]).nullable(),
      align: z.enum(["top", "middle", "bottom", "stretch"]).nullable(),
      justify: z
        .enum(["start", "end", "center", "space-around", "space-between", "space-evenly"])
        .nullable(),
      wrap: z.boolean().nullable(),
    }),
    slots: ["default"],
    description:
      "24-column grid row container. Must use Col children inside. gutter: horizontal spacing between columns (number or [horizontal, vertical] tuple). align controls vertical alignment. justify controls horizontal distribution.",
    example: { gutter: 16 },
  },

  Col: {
    props: z.object({
      span: z.number().nullable(),
      offset: z.number().nullable(),
      order: z.number().nullable(),
      push: z.number().nullable(),
      pull: z.number().nullable(),
      flex: z.union([z.number(), z.string()]).nullable(),
    }),
    slots: ["default"],
    description:
      "Column in 24-column grid system. Use inside Row. span (1-24) defines width. offset adds empty columns before. push/pull reorder columns. flex overrides default flex behavior.",
    example: { span: 12 },
  },

  // Masonry: {
  //   props: z.object({
  //     columns: z
  //       .union([z.number(), z.record(z.string(), z.number())])
  //       .nullable(),
  //     gutter: z
  //       .union([z.number(), z.tuple([z.number(), z.number()])])
  //       .nullable(),
  //   }),
  //   slots: ["default"],
  //   description:
  //     "Masonry layout for items with varying heights (like Pinterest). Children automatically fill vertical gaps. columns accepts number or responsive object { xs: 1, sm: 2, md: 3 }. gutter: spacing between items.",
  //   example: { columns: 3, gutter: [16, 16] },
  // },

  Divider: {
    props: z.object({
      orientation: z.enum(["horizontal", "vertical"]).nullable(),
      vertical: z.boolean().nullable(),
      titlePlacement: z.enum(["left", "center", "right", "start", "end"]).nullable(),
      dashed: z.boolean().nullable(),
      variant: z.enum(["solid", "dashed", "dotted"]).nullable(),
      plain: z.boolean().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      text: z.string().nullable(),
    }),
    description:
      "Visual divider line to separate content sections. Supports horizontal/vertical orientation. Use text + titlePlacement for labeled dividers. In Antd v6, use titlePlacement instead of deprecated orientation prop.",
  },

  Space: {
    props: z.object({
      orientation: z.enum(["horizontal", "vertical"]).nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      wrap: z.boolean().nullable(),
      align: z.enum(["start", "center", "end", "baseline"]).nullable(),
    }),
    slots: ["default"],
    description:
      "Uniform spacing between adjacent elements. Automatically adds consistent gaps between children. Ideal for button groups, form fields. Size presets: small=8px, middle=16px, large=24px.",
  },

  // ==========================================================================
  // Navigation Components
  // ==========================================================================

  Anchor: {
    props: z.object({
      items: z.array(
        z.object({
          key: z.string(),
          title: z.string(),
          href: z.string().nullable(),
        }),
      ),
      affix: z.boolean().nullable(),
      bounds: z.number().nullable(),
      offsetTop: z.number().nullable(),
      targetOffset: z.number().nullable(),
    }),
    events: ["change", "click"],
    description:
      "In-page anchor navigation for long content pages. Automatically highlights active section based on scroll position. items defines anchor links. bounds controls highlight activation distance.",
  },

  Breadcrumb: {
    props: z.object({
      items: z.array(
        z.object({
          title: z.string(),
          href: z.string().nullable(),
        }),
      ),
      separator: z.string().nullable(),
    }),
    description:
      "Navigation path indicator showing user's current location in site hierarchy. Use href in items for clickable links. Customize separator with string.",
  },


  Tabs: {
    props: z.object({
      tabs: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      ),
      defaultValue: z.string().nullable(),
      value: z.string().nullable(),
      position: z.enum(["top", "bottom", "left", "right"]).nullable(),
      type: z.enum(["line", "card"]).nullable(),
      centered: z.boolean().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      tabBarGutter: z.number().nullable(),
      destroyInactiveTabPane: z.boolean().nullable(),
    }),
    slots: ["tabs"],
    events: ["change"],
    description:
      "Tabbed interface for switching between content panels. tabs array defines tab labels and keys. Use slots.tabs array for each panel's content. Bind value with $bindState for controlled active tab.",
  },

  Collapse: {
    props: z.object({
      items: z.array(
        z.object({
          title: z.string(),
        }),
      ),
      accordion: z.boolean().nullable(),
      bordered: z.boolean().nullable(),
      ghost: z.boolean().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      expandIconPlacement: z.enum(["start", "end"]).nullable(),
      collapsible: z.enum(["header", "icon", "disabled"]).nullable(),
      defaultActiveKey: z
        .union([z.string(), z.array(z.string())])
        .nullable(),
      activeKey: z.union([z.string(), z.array(z.string())]).nullable(),
    }),
    slots: ["items"],
    description:
      "Accordion panels for showing/hiding content. Set accordion=true for single-panel mode. Use slots.items array for each panel's content. In Antd v6, use expandIconPlacement instead of deprecated expandIconPosition.",
  },

  Menu: {
    props: z.object({
      items: z.array(
        z.object({
          label: z.string(),
          key: z.string(),
          icon: z.string().nullable(),
        }),
      ),
      mode: z.enum(["horizontal", "vertical", "inline"]).nullable(),
      selectedKey: z.string().nullable(),
      theme: z.enum(["light", "dark"]).nullable(),
      defaultSelectedKeys: z.array(z.string()).nullable(),
      inlineCollapsed: z.boolean().nullable(),
      multiple: z.boolean().nullable(),
    }),
    events: ["select"],
    description:
      "Vertical or horizontal navigation menu. mode='inline' creates collapsible submenus. theme affects background style. Use selectedKey with $bindState for controlled selection.",
  },

  // ==========================================================================
  // Overlay Components
  // ==========================================================================

  Modal: {
    props: z.object({
      title: z.string(),
      description: z.string().nullable(),
      openPath: z.string(),
      width: z.number().nullable(),
      footer: z.boolean().nullable(),
      centered: z.boolean().nullable(),
      closable: z.boolean().nullable(),
      maskClosable: z.boolean().nullable(),
      okText: z.string().nullable(),
      cancelText: z.string().nullable(),
      confirmLoading: z.boolean().nullable(),
      destroyOnClose: z.boolean().nullable(),
      keyboard: z.boolean().nullable(),
      loading: z.boolean().nullable(),
    }),
    slots: ["default"],
    events: ["ok", "cancel"],
    description:
      "Modal dialog for important interactions requiring user attention. openPath binds to a boolean state to control visibility. Use confirmLoading during async operations. Set destroyOnClose to reset modal state on close.",
  },

  Drawer: {
    props: z.object({
      title: z.string(),
      description: z.string().nullable(),
      openPath: z.string(),
      placement: z.enum(["top", "bottom", "left", "right"]).nullable(),
      width: z.union([z.number(), z.string()]).nullable(),
      height: z.union([z.number(), z.string()]).nullable(),
      closable: z.boolean().nullable(),
      maskClosable: z.boolean().nullable(),
      destroyOnClose: z.boolean().nullable(),
      keyboard: z.boolean().nullable(),
      loading: z.boolean().nullable(),
      size: z.enum(["default", "large"]).nullable(),
    }),
    slots: ["default"],
    events: ["close"],
    description:
      "Side panel sliding in from screen edge. Ideal for forms, details, or supplementary content. openPath binds to a boolean state. Use placement to control slide direction.",
  },

  Popover: {
    props: z.object({
      trigger: z.string(),
      title: z.string().nullable(),
      content: z.string(),
      placement: z
        .enum([
          "top",
          "topLeft",
          "topRight",
          "bottom",
          "bottomLeft",
          "bottomRight",
          "left",
          "leftTop",
          "leftBottom",
          "right",
          "rightTop",
          "rightBottom",
        ])
        .nullable(),
      triggerType: z.enum(["hover", "focus", "click", "contextMenu"]).nullable(),
      arrow: z.boolean().nullable(),
      open: z.boolean().nullable(),
      defaultOpen: z.boolean().nullable(),
    }),
    description:
      "Floating card triggered by click, hover, or focus. Contains title and content. Use trigger element as children (via trigger prop). triggerType controls activation method.",
  },

  Tooltip: {
    props: z.object({
      content: z.string(),
      text: z.string(),
      placement: z
        .enum([
          "top",
          "topLeft",
          "topRight",
          "bottom",
          "bottomLeft",
          "bottomRight",
          "left",
          "leftTop",
          "leftBottom",
          "right",
          "rightTop",
          "rightBottom",
        ])
        .nullable(),
      triggerType: z.enum(["hover", "focus", "click", "contextMenu"]).nullable(),
      arrow: z.boolean().nullable(),
      color: z.string().nullable(),
      open: z.boolean().nullable(),
      defaultOpen: z.boolean().nullable(),
    }),
    description:
      "Simple text popup on hover. Shows content tooltip when hovering over text. Lighter than Popover - no title, just content. Use for brief contextual information.",
  },

  Dropdown: {
    props: z.object({
      items: z.array(
        z.object({
          label: z.string(),
          key: z.string(),
          icon: z.string().nullable(),
          danger: z.boolean().nullable(),
          disabled: z.boolean().nullable(),
          divider: z.boolean().nullable(),
        }),
      ),
      trigger: z.enum(["hover", "click", "contextMenu"]).nullable(),
      placement: z
        .enum([
          "topLeft",
          "topCenter",
          "topRight",
          "bottomLeft",
          "bottomCenter",
          "bottomRight",
        ])
        .nullable(),
      arrow: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
      open: z.boolean().nullable(),
      defaultOpen: z.boolean().nullable(),
    }),
    slots: ["default"],
    events: ["select", "openChange", "visibleChange"],
    description:
      "Dropdown menu activated by clicking or hovering trigger element. items define menu options. Use slots.default for trigger element. Set danger=true on items for destructive actions (shown in red).",
  },

  // ==========================================================================
  // Data Display Components
  // ==========================================================================

  Table: {
    props: z.object({
      columns: z.array(z.string()),
      rows: z.array(z.array(z.string())),
      caption: z.string().nullable(),
      bordered: z.boolean().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      loading: z.boolean().nullable(),
      pagination: z
        .union([
          z.boolean(),
          z.object({
            pageSize: z.number().nullable(),
            current: z.number().nullable(),
            total: z.number().nullable(),
            showSizeChanger: z.boolean().nullable(),
            showQuickJumper: z.boolean().nullable(),
            simple: z.boolean().nullable(),
            hideOnSinglePage: z.boolean().nullable(),
          }),
        ])
        .nullable(),
      scroll: z
        .object({
          x: z.union([z.number(), z.string()]).nullable(),
          y: z.union([z.number(), z.string()]).nullable(),
        })
        .nullable(),
      showHeader: z.boolean().nullable(),
      rowKey: z.string().nullable(),
      sticky: z.boolean().nullable(),
    }),
    description:
      "Data table for displaying structured information. columns: array of header labels. rows: 2D array of cell values. Set pagination=false to disable. Use scroll for horizontal/vertical scrolling in large datasets.",
    example: {
      columns: ["Name", "Role"],
      rows: [
        ["Alice", "Admin"],
        ["Bob", "User"],
      ],
    },
  },


  Text: {
    props: z.object({
      text: z.string(),
      type: z.enum(["secondary", "success", "warning", "danger"]).nullable(),
      code: z.boolean().nullable(),
      copyable: z.boolean().nullable(),
      delete: z.boolean().nullable(),
      mark: z.boolean().nullable(),
      underline: z.boolean().nullable(),
      strong: z.boolean().nullable(),
      italic: z.boolean().nullable(),
      color: z.string().nullable(),
      backgroundColor: z.string().nullable(),
      fontSize: z.union([z.number(), z.string()]).nullable(),
      borderRadius: z.union([z.number(), z.string()]).nullable(),
      padding: z.union([z.number(), z.string()]).nullable(),
    }),
    events: ["click"],
    description:
      "Typography text with semantic styles. type controls color (secondary=gray, success=green, warning=orange, danger=red). Combine strong, italic, underline for emphasis. code shows monospace. copyable adds copy button.",
    example: {
      text: "Success Message",
      type: "success",
      strong: true,
      backgroundColor: "#f6ffed",
      fontSize: 14,
      borderRadius: 4,
      padding: 8
    },
  },

  Paragraph: {
    props: z.object({
      text: z.string(),
      ellipsis: z.boolean().nullable(),
      rows: z.number().nullable(),
      color: z.string().nullable(),
      backgroundColor: z.string().nullable(),
      fontSize: z.union([z.number(), z.string()]).nullable(),
      fontWeight: z.union([z.number(), z.string()]).nullable(),
      lineHeight: z.union([z.number(), z.string()]).nullable(),
      borderRadius: z.union([z.number(), z.string()]).nullable(),
      boxShadow: z.string().nullable(),
      border: z.string().nullable(),
      padding: z.union([z.number(), z.string()]).nullable(),
      margin: z.union([z.number(), z.string()]).nullable(),
    }),
    description:
      "Paragraph text block with optional truncation. Set ellipsis=true with rows to limit visible lines and show expandable '...'. Useful for long descriptions.",
    example: {
      text: "This is a paragraph with custom styling",
      color: "#333333",
      backgroundColor: "#f5f5f5",
      fontSize: 16,
      borderRadius: 4,
      padding: 12
    },
  },

  Image: {
    props: z.object({
      src: z.string(),
      alt: z.string(),
      width: z.union([z.number(), z.string()]).nullable(),
      height: z.union([z.number(), z.string()]).nullable(),
      preview: z.boolean().nullable(),
      fallback: z.string().nullable(),
    }),
    events: ["click"],
    description:
      "Image component with optional preview functionality. preview defaults to false. When click event is bound, preview is automatically disabled. Set preview=true to enable full-screen zoom preview.",
  },

  Avatar: {
    props: z.object({
      src: z.string().nullable(),
      name: z.string(),
      size: z
        .union([z.number(), z.enum(["small", "default", "large"])])
        .nullable(),
      shape: z.enum(["circle", "square"]).nullable(),
      icon: z.string().nullable(),
      alt: z.string().nullable(),
      gap: z.number().nullable(),
    }),
    description:
      "User avatar showing image or initials fallback. When src fails to load, displays name initials. size accepts preset ('small'/'default'/'large') or number. Use gap to adjust initials spacing.",
    example: { name: "Jane Doe", size: "default" },
  },

  Badge: {
    props: z.object({
      count: z.union([z.number(), z.string()]).nullable(),
      dot: z.boolean().nullable(),
      color: z.string().nullable(),
      status: z
        .enum(["success", "processing", "default", "error", "warning"])
        .nullable(),
      text: z.string().nullable(),
      size: z.enum(["default", "small"]).nullable(),
      overflowCount: z.number().nullable(),
      showZero: z.boolean().nullable(),
      title: z.string().nullable(),
      offset: z.tuple([z.union([z.number(), z.string()]), z.union([z.number(), z.string()])]).nullable(),
    }),
    slots: ["default"],
    description:
      "Status indicator or notification count badge. Wrap around element to add badge. Use dot=true for simple status dot. status + text creates standalone status badge. overflowCount caps displayed number.",
    example: { count: 5 },
  },

  Tag: {
    props: z.object({
      text: z.string(),
      color: z.string().nullable(),
      closable: z.boolean().nullable(),
      bordered: z.boolean().nullable(),
      icon: z.string().nullable(),
      backgroundColor: z.string().nullable(),
      borderRadius: z.union([z.number(), z.string()]).nullable(),
      boxShadow: z.string().nullable(),
      border: z.string().nullable(),
    }),
    events: ["close"],
    description:
      "Label for categorizing, marking, or filtering. color accepts preset colors ('blue', 'green', 'red', etc.) or hex. closable shows close button for removal. Use for dynamic tag lists.",
    example: {
      text: "Active",
      color: "green",
      backgroundColor: "#f6ffed",
      borderRadius: 4,
      border: "1px solid #b7eb8f"
    },
  },

  Alert: {
    props: z.object({
      title: z.string(),
      description: z.string().nullable(),
      type: z.enum(["info", "success", "warning", "error"]).nullable(),
      closable: z.boolean().nullable(),
      showIcon: z.boolean().nullable(),
      banner: z.boolean().nullable(),
    }),
    events: ["close"],
    description:
      "Persistent message banner for important information. type controls style and default icon. Use showIcon=true to display status icon. Set banner=true for top-of-page alerts without border.",
    example: {
      title: "Note",
      description: "Your changes have been saved.",
      type: "success",
    },
  },

  Progress: {
    props: z.object({
      value: z.number(),
      max: z.number().nullable(),
      label: z.string().nullable(),
      status: z.enum(["success", "exception", "normal", "active"]).nullable(),
      type: z.enum(["line", "circle", "dashboard"]).nullable(),
      showInfo: z.boolean().nullable(),
      strokeColor: z.string().nullable(),
      size: z.union([z.enum(["small", "default"]), z.number()]).nullable(),
      steps: z.number().nullable(),
    }),
    description:
      "Visual progress indicator (0-100). type='line' for horizontal bar, 'circle'/'dashboard' for circular. status='success' shows green, 'exception' shows red. steps creates segmented progress.",
    example: { value: 65, max: 100, label: "Upload progress" },
  },

  Skeleton: {
    props: z.object({
      loading: z.boolean().nullable(),
      active: z.boolean().nullable(),
      rows: z.number().nullable(),
      avatar: z.boolean().nullable(),
      title: z.boolean().nullable(),
      round: z.boolean().nullable(),
    }),
    slots: ["default"],
    description:
      "Placeholder skeleton during content loading. active=true shows animation. Use avatar for profile skeleton, rows for content lines. Wraps actual content in slots.default for automatic loading state.",
  },

  Spin: {
    props: z.object({
      size: z.enum(["small", "default", "large"]).nullable(),
      label: z.string().nullable(),
      spinning: z.boolean().nullable(),
      delay: z.number().nullable(),
      fullscreen: z.boolean().nullable(),
    }),
    slots: ["default"],
    description:
      "Loading spinner indicator. Wrap content to show loading overlay. spinning controls visibility. fullscreen creates page-level loading. Use delay to prevent flash on quick loads.",
  },

  Empty: {
    props: z.object({
      description: z.string().nullable(),
    }),
    description:
      "Placeholder for empty data states. Shows default illustration with optional description text. Use for tables, lists, or containers with no content.",
  },

  Statistic: {
    props: z.object({
      title: z.string(),
      value: z.union([z.number(), z.string()]),
      prefix: z.string().nullable(),
      suffix: z.string().nullable(),
      precision: z.number().nullable(),
      loading: z.boolean().nullable(),
      groupSeparator: z.string().nullable(),
      decimalSeparator: z.string().nullable(),
    }),
    description:
      "Display a numeric value with label for dashboards. prefix/suffix add symbols (e.g., '$', '%'). precision controls decimal places. loading shows skeleton during data fetch.",
  },

  Descriptions: {
    props: z.object({
      title: z.string().nullable(),
      items: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
          span: z.number().nullable(),
        }),
      ),
      bordered: z.boolean().nullable(),
      column: z.number().nullable(),
      colon: z.boolean().nullable(),
      layout: z.enum(["horizontal", "vertical"]).nullable(),
      size: z.enum(["default", "middle", "small"]).nullable(),
      backgroundColor: z.string().nullable(),
      borderRadius: z.union([z.number(), z.string()]).nullable(),
      boxShadow: z.string().nullable(),
      border: z.string().nullable(),
    }),
    description:
      "Read-only key-value pairs display (like product details). items define rows with label and value. bordered adds table styling. column controls items per row. Use for profile info, settings display.",
    example: {
      title: "User Info",
      bordered: true,
      column: 2,
      items: [
        { label: "Name", value: "John Doe" },
        { label: "Age", value: "28" }
      ]
    },
  },

  Timeline: {
    props: z.object({
      items: z.array(
        z.object({
          color: z.string().nullable(),
        }),
      ),
      mode: z.enum(["left", "alternate", "right"]).nullable(),
      reverse: z.boolean().nullable(),
    }),
    slots: ["items"],
    description:
      "Vertical timeline for chronological events. Each item creates a node. Use slots.items for node content. mode='alternate' zigzags content left/right. color accepts preset or hex.",
  },

  Carousel: {
    props: z.object({
      autoplay: z.boolean().nullable(),
      dots: z.boolean().nullable(),
      effect: z.enum(["scrollx", "fade"]).nullable(),
      autoplaySpeed: z.number().nullable(),
      speed: z.number().nullable(),
      infinite: z.boolean().nullable(),
      arrows: z.boolean().nullable(),
      dotPosition: z.enum(["top", "bottom", "left", "right"]).nullable(),
    }),
    slots: ["default"],
    description:
      "Image/content carousel with auto-play and navigation. autoplay for automatic rotation. effect controls transition style. Use slots.default for slide content. Navigation dots shown by default.",
  },

  Calendar: {
    props: z.object({
      value: z.string().nullable(),
      mode: z.enum(["month", "year"]).nullable(),
      fullscreen: z.boolean().nullable(),
    }),
    events: ["change", "select"],
    description:
      "Calendar component for date display and selection. mode switches between month and year views. fullscreen=false for compact card mode. Use for scheduling, date picking, or event display.",
  },

  Tree: {
    props: z.object({
      treeData: z.array(
        z.object({
          key: z.string(),
          title: z.string(),
          children: z.array(z.any()).nullable(),
        }),
      ),
      checkable: z.boolean().nullable(),
      checkedKeys: z.array(z.string()).nullable(),
      expandedKeys: z.array(z.string()).nullable(),
      selectedKeys: z.array(z.string()).nullable(),
      defaultExpandAll: z.boolean().nullable(),
      showLine: z.boolean().nullable(),
      multiple: z.boolean().nullable(),
    }),
    events: ["check", "expand", "select"],
    description:
      "Hierarchical tree structure for navigation or selection. treeData defines node hierarchy. checkable shows checkboxes for multi-select. showLine adds connecting lines. Use for folder structures, org charts.",
  },

  // ==========================================================================
  // Form Input Components
  // ==========================================================================

  Input: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      type: z.enum(["text", "email", "password", "number"]).nullable(),
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      prefix: z.string().nullable(),
      suffix: z.string().nullable(),
      allowClear: z.boolean().nullable(),
      showCount: z.boolean().nullable(),
      maxLength: z.number().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      variant: z.enum(["outlined", "borderless", "filled"]).nullable(),
      readOnly: z.boolean().nullable(),
      addonBefore: z.string().nullable(),
      addonAfter: z.string().nullable(),
      disabled: z.boolean().nullable(),
      checks: validationCheckSchema,
      validateOn: validateOnSchema,
      status: z.enum(["error", "warning"]).nullable(),
    }),
    events: ["submit", "focus", "blur", "change"],
    description:
      "Text input field for forms. Use $bindState on value for two-way binding. checks array for validation rules (e.g., required, email). validateOn controls when validation runs ('change', 'blur', 'submit'). prefix/suffix add icons or text.",
    example: {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "you@example.com",
    },
  },

  TextArea: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      placeholder: z.string().nullable(),
      rows: z.number().nullable(),
      value: z.string().nullable(),
      allowClear: z.boolean().nullable(),
      showCount: z.boolean().nullable(),
      maxLength: z.number().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      variant: z.enum(["outlined", "borderless", "filled"]).nullable(),
      readOnly: z.boolean().nullable(),
      autoSize: z
        .union([
          z.boolean(),
          z.object({ minRows: z.number(), maxRows: z.number() }),
        ])
        .nullable(),
      disabled: z.boolean().nullable(),
      checks: validationCheckSchema,
      validateOn: validateOnSchema,
    }),
    description:
      "Multi-line text input for longer content. autoSize enables dynamic height based on content. showCount displays character count. Use for comments, descriptions, messages.",
  },

  InputNumber: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      placeholder: z.string().nullable(),
      value: z.number().nullable(),
      min: z.number().nullable(),
      max: z.number().nullable(),
      step: z.number().nullable(),
      precision: z.number().nullable(),
      prefix: z.string().nullable(),
      suffix: z.string().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      variant: z.enum(["outlined", "borderless", "filled"]).nullable(),
      disabled: z.boolean().nullable(),
      checks: validationCheckSchema,
      validateOn: validateOnSchema,
    }),
    events: ["change"],
    description:
      "Numeric input with increment/decrement controls. min/max define range. precision controls decimal places. step sets increment amount. prefix/suffix add currency symbols or units.",
  },

  Select: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      options: z.array(
        z.union([
          z.string(),
          z.object({ label: z.string(), value: z.string() }),
        ]),
      ),
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      mode: z.enum(["multiple", "tags"]).nullable(),
      allowClear: z.boolean().nullable(),
      showSearch: z.boolean().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      variant: z.enum(["outlined", "borderless", "filled"]).nullable(),
      disabled: z.boolean().nullable(),
      checks: validationCheckSchema,
      validateOn: validateOnSchema,
    }),
    events: ["change"],
    description:
      "Dropdown selection from predefined options. options can be string array or {label, value} objects. mode='multiple' for multi-select. showSearch enables filtering. Use $bindState on value for form binding.",
  },

  Checkbox: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      checked: z.boolean().nullable(),
      indeterminate: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
      checks: validationCheckSchema,
      validateOn: validateOnSchema,
    }),
    events: ["change"],
    description:
      "Boolean checkbox for single option selection. indeterminate creates partially selected state (useful for parent checkboxes). Use $bindState on checked for form binding.",
  },

  CheckboxGroup: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      options: z.array(
        z.union([
          z.string(),
          z.object({ label: z.string(), value: z.string() }),
        ]),
      ),
      value: z.array(z.string()).nullable(),
      disabled: z.boolean().nullable(),
      checks: validationCheckSchema,
      validateOn: validateOnSchema,
    }),
    events: ["change"],
    description:
      "Multiple checkboxes from a single options list. Returns array of selected values. Use for multi-select scenarios like interests, permissions.",
  },

  Radio: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      options: z.array(
        z.union([
          z.string(),
          z.object({ label: z.string(), value: z.string() }),
        ]),
      ),
      value: z.string().nullable(),
      optionType: z.enum(["default", "button"]).nullable(),
      disabled: z.boolean().nullable(),
      checks: validationCheckSchema,
      validateOn: validateOnSchema,
    }),
    events: ["change"],
    description:
      "Radio button group for single choice selection. optionType='button' shows button style instead of radio circles. Use $bindState on value for form binding.",
  },

  Switch: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      checked: z.boolean().nullable(),
      checkedChildren: z.string().nullable(),
      unCheckedChildren: z.string().nullable(),
      disabled: z.boolean().nullable(),
      checks: validationCheckSchema,
      validateOn: validateOnSchema,
    }),
    events: ["change"],
    description:
      "Toggle switch for boolean settings. checkedChildren/unCheckedChildren add labels inside switch. Use for enabling/disabling features. More compact than checkbox.",
  },

  Slider: {
    props: z.object({
      label: z.string().nullable(),
      name: z.string().nullable(),
      min: z.number().nullable(),
      max: z.number().nullable(),
      step: z.number().nullable(),
      value: z.union([z.number(), z.array(z.number())]).nullable(),
      range: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
      marks: z
        .record(
          z.string(),
          z.union([
            z.string(),
            z.object({ style: z.any(), label: z.string() }),
          ]),
        )
        .nullable(),
    }),
    events: ["change"],
    description:
      "Range slider for numeric value selection. range=true creates dual-handle range picker. marks adds labeled tick marks. Use for price ranges, volume controls.",
  },

  Rate: {
    props: z.object({
      label: z.string().nullable(),
      name: z.string().nullable(),
      count: z.number().nullable(),
      value: z.number().nullable(),
      allowHalf: z.boolean().nullable(),
      allowClear: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
    }),
    events: ["change"],
    description:
      "Star rating component for feedback. count sets number of stars (default 5). allowHalf enables half-star ratings. Use for product reviews, satisfaction scores.",
  },

  DatePicker: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      format: z.string().nullable(),
      picker: z.enum(["date", "week", "month", "quarter", "year"]).nullable(),
      showTime: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
    }),
    events: ["change"],
    description:
      "Date selection input with calendar popup. picker changes granularity (date/week/month/quarter/year). showTime adds time selection. format customizes display (default 'YYYY-MM-DD').",
  },

  TimePicker: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      format: z.string().nullable(),
      disabled: z.boolean().nullable(),
    }),
    events: ["change"],
    description:
      "Time selection input with dropdown. format customizes display (default 'HH:mm:ss'). Use for scheduling, time-based settings.",
  },

  Mentions: {
    props: z.object({
      label: z.string(),
      name: z.string(),
      options: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
        }),
      ),
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      autoSize: z
        .union([
          z.boolean(),
          z.object({ minRows: z.number(), maxRows: z.number() }),
        ])
        .nullable(),
      disabled: z.boolean().nullable(),
    }),
    events: ["change"],
    description:
      "Textarea with @-mention autocomplete. Type '@' to trigger suggestions from options. Use for comments, chat messages, tagging users.",
  },

  // ==========================================================================
  // Action Components
  // ==========================================================================

  Button: {
    props: z.object({
      label: z.string(),
      type: z.enum(["primary", "default", "dashed", "text", "link"]).nullable(),
      color: z.enum(["default", "primary", "danger"]).nullable(),
      variant: z.enum(["outlined", "dashed", "solid", "filled", "text", "link"]).nullable(),
      danger: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
      loading: z.boolean().nullable(),
      icon: z.string().nullable(),
      block: z.boolean().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
      ghost: z.boolean().nullable(),
      shape: z.enum(["default", "circle", "round"]).nullable(),
      href: z.string().nullable(),
      target: z.enum(["_blank", "_self", "_parent", "_top"]).nullable(),
      htmlType: z.enum(["button", "submit", "reset"]).nullable(),
      backgroundColor: z.string().nullable(),
      borderRadius: z.union([z.number(), z.string()]).nullable(),
      boxShadow: z.string().nullable(),
      border: z.string().nullable(),
      width: z.union([z.number(), z.string()]).nullable(),
      height: z.union([z.number(), z.string()]).nullable(),
    }),
    events: ["click"],
    description:
      "Action button for user interactions. type='primary' for main actions. Use color + variant for granular control. color can be 'default', 'primary', 'danger'. variant: 'outlined', 'solid', 'filled', etc. ghost inverts colors for dark backgrounds.",
    example: { label: "Submit", type: "primary", borderRadius: 4 },
  },

  ButtonGroup: {
    props: z.object({
      buttons: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
          type: z
            .enum(["primary", "default", "dashed", "text", "link"])
            .nullable(),
        }),
      ),
      selected: z.string().nullable(),
    }),
    events: ["change"],
    description:
      "Segmented button group for mutually exclusive options. Only one button active at a time. Use $bindState on selected to track active button. Good for view mode switches, filter toggles.",
  },

  Link: {
    props: z.object({
      label: z.string(),
      href: z.string(),
      target: z.enum(["_blank", "_self", "_parent", "_top"]).nullable(),
      disabled: z.boolean().nullable(),
    }),
    events: ["click"],
    description:
      "Styled anchor link for navigation. target='_blank' opens in new tab. Use href for navigation or bind click event for custom action. Part of Typography.Link.",
  },


  Segmented: {
    props: z.object({
      name: z.string().nullable(),
      options: z.array(
        z.union([
          z.string(),
          z.object({
            label: z.string(),
            value: z.string(),
            icon: z.string().nullable(),
          }),
        ]),
      ),
      value: z.string().nullable(),
      block: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
      size: z.enum(["small", "middle", "large"]).nullable(),
    }),
    events: ["change"],
    description:
      "iOS-style segmented control for switching between views/options. More compact than tabs. block=true for full-width. options can be strings or objects with icons. Use name for form field identification.",
  },

  Steps: {
    props: z.object({
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string().nullable(),
          subTitle: z.string().nullable(),
          icon: z.string().nullable(),
          disabled: z.boolean().nullable(),
          status: z
            .enum(["wait", "process", "finish", "error"])
            .nullable(),
        }),
      ),
      current: z.number().nullable(),
      direction: z.enum(["horizontal", "vertical"]).nullable(),
      status: z.enum(["wait", "process", "finish", "error"]).nullable(),
      size: z.enum(["default", "small"]).nullable(),
      type: z.enum(["default", "navigation", "inline"]).nullable(),
      initial: z.number().nullable(),
      labelPlacement: z.enum(["horizontal", "vertical"]).nullable(),
      percent: z.number().nullable(),
    }),
    events: ["change"],
    description:
      "Step progress indicator for multi-step workflows. current tracks active step (0-indexed). status on items overrides step state. type='navigation' for clickable steps. Use for forms, wizards, checkout flows.",
  },

  Result: {
    props: z.object({
      status: z
        .enum(["success", "error", "info", "warning", "404", "403", "500"])
        .nullable(),
      title: z.string(),
      subTitle: z.string().nullable(),
    }),
    slots: ["default"],
    description:
      "Result page for operation outcomes. status determines icon and color (404, 403, 500 for error pages). Use slots.default for extra actions. Common after form submission or async operations.",
  },
};

// =============================================================================
// Types
// =============================================================================

/**
 * Type for a component definition
 */
export type ComponentDefinition = {
  props: z.ZodType;
  slots?: string[];
  events?: string[];
  description: string;
  example?: Record<string, unknown>;
};

/**
 * Infer the props type for an antd component by name.
 * Derives the TypeScript type directly from the Zod schema,
 * so component implementations stay in sync with catalog definitions.
 *
 * @example
 * ```ts
 * type CardProps = AntdProps<"Card">;
 * // { title: string | null; description: string | null; ... }
 * ```
 */
export type AntdProps<K extends keyof typeof antdComponentDefinitions> =
  z.output<(typeof antdComponentDefinitions)[K]["props"]>;

/**
 * Bindings configuration for state binding paths.
 * Used for two-way data binding with state management.
 */
export type BindingsConfig = {
  [key: string]: string | undefined;
};

/**
 * Event emit function type
 */
export type EmitFunction = (eventName: string) => void;
