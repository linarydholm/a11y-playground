import { View } from 'ui';

const classes =
  'px-2 hover:after:bg-blue-500 after:absolute after:-bottom-0.5 after:h-0.5 after:start-0 after:w-full after:content-[""] relative py-2 text-gray-300 hover:text-white';

const _5 = () => {
  return (
    <View
      title="5. Semantics (Navigation)"
      difficulty={1}
      description="Some person sent you an auto-generated navigation. Can the markup be improved from an accessibility standpoint? You can use the styles provided, or you can use your own. Don't forget to make each item a real link."
      challenge="Imagine the current page is 'Facebook', how would you indicate that to the user?"
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <div className="flex border-2 rounded-lg border-gray-400 gap-4 px-4 items-center">
          <p className={classes}>Facebook</p>
          <p className={classes}>Amazon</p>
          <p className={classes}>Apple</p>
          <p className={classes}>Netflix</p>
          <p className={classes}>Google</p>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
        <nav className="max-w-2xl flex flex-col gap-4">
          <menu className="flex border-2 rounded-lg border-gray-400 gap-4 px-4 items-center">
            <li className={classes}>
              <a href="#">Facebook</a>
            </li>
            <li className={classes}>
              <a href="#">Amazon</a>
            </li>
            <li className={classes}>
              <a href="#">Apple</a>
            </li>
            <li className={classes}>
              <a href="#">Netflix</a>
            </li>
            <li className={classes}>
              <a href="#">Google</a>
            </li>
          </menu>
        </nav>
      </div>
    </View>
  );
};

export default _5;
