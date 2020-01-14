class MessagesList { 

  constructor(el) {
    this.el = el;

    /**
     * Сделать автоматическое обновление ленты, через интервал
     * (см про setTimeout и setInterval)
     */

     this.refresh();
  }

  refresh() {
    fetch('https://lesson15test.herokuapp.com/posts')
      .then(res => res.json())
      .then(data => this.render(data));
  }

  render(data) {
    console.log(data);
    const list = [];

    for (const { subject, text } of data.items) {
      list.push(`
        <li class="messages-list__item">
          <h3>${subject}</h3>
          <p>
            ${text}
          </p>
        </li>
      `)
    }

    this.el.innerHTML = list.join('');
  }

}


