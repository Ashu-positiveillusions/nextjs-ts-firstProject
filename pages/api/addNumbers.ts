// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  [key: string]: {
    carryString: string;
    sumString: string;
  };
}


function addNumbersWithCarryOver(num1: string, num2: string): { [key: string]: { carryString: string; sumString: string } } {
  let result = '';
  let carry = 0;
  let carryString = '_'
  const obj: { [key: string]: { carryString: string, sumString: string } } = {};
  const maxLength = Math.max(num1.length, num2.length);

  for (let i = 0; i < maxLength; i++) {
    const digit1 = Number(num1[num1.length - 1 - i]) || 0;
    const digit2 = Number(num2[num2.length - 1 - i]) || 0;

    const sum = digit1 + digit2 + carry;
    const currentDigit = sum % 10;
    carry = Math.floor(sum / 10);
    if(carryString.length !== maxLength){
      carryString = `${carry}`+`${carryString}`;
    }
    let name = `step${i+1}`;
    result = currentDigit.toString() + result;
    obj[name] = {carryString: carryString, sumString: result}
  }
  if (carry > 0) {
    result = carry.toString() + result;
  }
  return obj;
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { num1, num2 } = req.body;
  const result = addNumbersWithCarryOver(num1,num2)
  res.status(200).json(result )
}
