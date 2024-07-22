import React, { useState, useEffect } from 'react';

function Time({ databaseTimestamp }) {
  const [timeDifferenceText, setTimeDifferenceText] = useState('');

  useEffect(() => {
    const databaseTimestampObject = new Date(databaseTimestamp);
    const currentTimestamp = new Date();
    const timeDifferenceInMilliseconds = currentTimestamp.getTime() - databaseTimestampObject.getTime();

    // Calculate and format the time difference as described earlier

    setTimeDifferenceText(displayText); // Update the state
  }, [databaseTimestamp]); // Recalculate on timestamp change

  return (
    <div>
      This post is {timeDifferenceText} old
    </div>
  );
}

export default Time;
