const UserCard = ({
  name,
  website,
  company: { name: companyName, catchPhrase },
}) => {
  return (
    <li className="text-sm leading-6">
      <figure class="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
          <p>{catchPhrase}</p>
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <div class="flex-auto">
            <div class="text-base text-slate-900 font-semibold dark:text-slate-300">
              <a href={website} tabindex="0">
                <span className="absolute inset-0"></span>
                {name}
              </a>
              <div class="mt-0.5">{companyName}</div>
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

export default UserCard;
