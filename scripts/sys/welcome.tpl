<h3>Happy Hacking!</h3>

<ul>
    {%for app in apps%}
    <li>
        <a href="/{{app}}/index.html">{{app}}</a>
    </li>
    {%endfor%}
</ul>
