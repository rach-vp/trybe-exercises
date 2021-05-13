USE Piecesproviders;
SET
  @piece = (
    SELECT
      `piece`
    FROM
      `Provides`
    ORDER BY
      `price` DESC
    LIMIT
      1
  );
SET
  @piece_name = (
    SELECT
      `name` as piece_name
    FROM
      `Pieces`
    WHERE
      `code` = @piece
    LIMIT
      1
  );
SELECT
  CONCAT(
    'The most expensive piece is ',
    @piece_name,
    ', provided by ',
    `provider`,
    ' and costs ',
    `price`,
    'BRL'
  ) as result
FROM
  `Provides`
ORDER BY
  `price` DESC
LIMIT
  1;