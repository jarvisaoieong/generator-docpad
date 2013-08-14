# <%= name %>

> <%= description %>

## Getting Started
_(Coming soon)_

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_<% if (usingGithub && licenses && licenses.length) { %>

## License

Copyright (c) <%= new Date().getFullYear() %> <%= author %> 
Licensed under the <%= licenses.join(', ') %> license<%= licenses.length === 1 ? '' : 's' %>.<% } %>

