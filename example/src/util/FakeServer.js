export const loadData = (offset) => {

  const data = [...Array(10)].map((_, i) => {
      const item = {};
      item.title =  `This is the title for index number ${offset + i}`;
      item.message = `This is the message for index number ${offset + i}.\nThis can go as long as possible.`;
      return item;
  });

  return data;
}
