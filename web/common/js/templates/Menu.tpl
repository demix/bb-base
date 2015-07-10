<div class="dialog-inner">
    <div class="dialog-header"><%=title%></div>
    <div class="dialog-body">
        <% items.forEach(function(item, idx){ %>
        <p data-idx="<%= idx %>"><%= item[0] %></p>
        <% }) %>
    </div>
</div>
 
