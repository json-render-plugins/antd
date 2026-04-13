# @json-render-plugins/antd

## 0.0.2

### Minor Changes

- Enhanced component styling support with custom CSS properties
  - Added `backgroundColor`, `borderRadius`, `boxShadow`, `border` properties to:
    - `Card` - Full style customization support
    - `Button` - Button styling with custom colors and borders
    - `Tag` - Tag component styling
    - `Descriptions` - Description list styling
  - Added comprehensive text styling properties to:
    - `Paragraph` - `fontSize`, `fontWeight`, `lineHeight`, `borderRadius`, `boxShadow`, `border`, `padding`, `margin`
    - `Text` - `borderRadius`, `padding` properties

- Added event support
  - `Card` - Added `click` event for card interactions
  - `Text` - Added `click` event for clickable text

- Improved component examples
  - Enhanced `Card` example with full styling properties
  - Enhanced `Button` example with borderRadius
  - Enhanced `Tag` example with backgroundColor and border
  - Enhanced `Text` example with type, backgroundColor, borderRadius, and padding
  - Enhanced `Descriptions` example with bordered layout

- Removed components
  - `Affix` - Removed due to implementation complexity
  - `List` - Removed due to API incompatibility with Ant Design's pagination onChange event
  - `AutoComplete` - Removed to simplify component library
  - `Cascader` - Removed to simplify component library

- Fixed component property implementations
  - `Paragraph` - Now properly implements `color` and `backgroundColor` from catalog definition

## 0.0.1

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