import { View } from 'ui';

const _10 = () => {
  return (
    <View
      title="Final: Semantics (Quote Block)"
      difficulty={3}
      description="From scratch, create a quote block with the following contents (see below)."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <p className="font-bold">Your quote block should have the following information:</p>
        <ul className="list-disc ps-4">
          <li>A quote. Make one up yourself, something you live by.</li>
          <li>The author of the quote, as in; you.</li>
          <li>The date at which you came up with it.</li>
          <li>A reference to your book, with a link to it. (Use your imagination)</li>
        </ul>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
        <div className="max-w-2xl flex flex-col gap-4">
          <strong className="font-bold">
            Your quote block should have the following information:
          </strong>
          <ul className="list-disc ps-4">
            <li>
              <blockquote>
                <p>A quote. Make one up yourself, something you live by.</p>
                <cite>The source/author of the quote</cite>
              </blockquote>
            </li>
            <li>
              <p>The date at which you came up with it.</p>
              <time>2023-12-21</time>
            </li>
            <li>
              <figure>
                <figcaption>
                  First sentence in{' '}
                  <cite>
                    <a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a>
                  </cite>{' '}
                  by George Orwell (Part 1, Chapter 1).
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </View>
  );
};

export default _10;
