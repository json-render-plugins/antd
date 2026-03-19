# @json-render-plugins/antd

## 0.11.0

### Minor Changes

- Initial release of `@json-render-plugins/antd` package.

  Pre-built [Ant Design](https://ant.design/) component library for json-render. 59 components ready to use with `defineCatalog` and `defineRegistry`.

  - `antdComponentDefinitions` — Zod-based catalog definitions for all components (server-safe, no React dependency via `@json-render-plugins/antd/catalog`)
  - `antdComponents` — React implementations for all components

  ### Layout Components
  - Card, Flex, Stack, Grid, Row, Col, Divider, Space

  ### Navigation Components
  - Tabs, Collapse, Menu, Affix, Anchor, Breadcrumb

  ### Overlay Components
  - Modal, Drawer, Popover, Tooltip, Dropdown

  ### Data Display Components
  - Table, Text, Paragraph, Image, Avatar, Badge, Tag, Alert, Progress, Skeleton, Spin, Empty, Statistic, Descriptions, Timeline, Carousel, Calendar, List, Tree

  ### Data Entry Components
  - Input, TextArea, InputNumber, Select, Checkbox, CheckboxGroup, Radio, Switch, Slider, Rate, DatePicker, TimePicker, AutoComplete, Cascader, Mentions

  ### Action Components
  - Button, ButtonGroup, Link, Segmented, Steps, Result

### Patch Changes

- Updated dependencies
  - @json-render/core@0.11.0
  - @json-render/react@0.11.0
