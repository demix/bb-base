<!doctype html>
<html>
    <head>
        <meta name="charset" content="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0, user-scalable=0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
        <title>{%block title%}Backbone Base{%endblock%}</title>
        <link rel="stylesheet" href="/static/css/common.css" type="text/css" media="screen" />
        {% block css %}
        <link rel="stylesheet" href="/static/css/{{appname}}.css" type="text/css" media="screen" />
        {% endblock %}
        {% block more_css %}{% endblock %}
    </head>
    <body>
        <ws></ws>
        {% block content %}{% endblock %}
    </body>
    {% block script %}
    <script src="/static/js/common.js"></script>
    <script src="/static/js/{{appname}}.js"></script>
    {% endblock %}
    {% block more_script %}{% endblock %}
</html>
        
