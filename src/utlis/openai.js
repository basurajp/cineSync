import OpenAI from 'openai';
import { OPNAI_GPT_KEY } from './constant';

const openai = new OpenAI({
  apiKey: OPNAI_GPT_KEY,
  dangerouslyAllowBrowser: true
});

export default openai