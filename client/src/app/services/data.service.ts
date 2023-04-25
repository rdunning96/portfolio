import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Configuration, OpenAIApi } from "openai";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private metaUrl = 'assets/data-json/work-data.json';
  private openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: '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',
    });
    this.openai = new OpenAIApi(configuration);
  }

  public async getBlogPost(prompt: string): Promise<string> {
    try {
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        n: 1,
        stop: null,
        temperature: 0.8
      });

      const generatedText = response.data.choices[0].text;
      return generatedText;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return 'Error generating blog post';
    }
  }

  public getMetaData(): Observable<any> {
    return from(axios.get<any>(this.metaUrl));
  }
}
