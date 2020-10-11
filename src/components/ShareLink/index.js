import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import LinkIcon from '@material-ui/icons/Link';
import DoneIcon from '@material-ui/icons/Done';
import queryString from 'query-string';

const ShareLink = () => {
  const [ copied, setCopied ] = useState(false);
  const {
    includeAdult,
    language,
    page,
    query,
  } = useSelector(state => state.search);

  const handleClick = () => {
    const params = {
      include_adult: includeAdult,
      language,
      page,
      query
    };

    const url = queryString.stringifyUrl({
      url: window.location.origin,
      query: params,
    })
    navigator.clipboard.writeText(url);

    setCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [copied]);

  return (
    <div>
      {copied ?
        <DoneIcon /> :
        <LinkIcon onClick={handleClick} />
      }
    </div>
  );
}

export default ShareLink;