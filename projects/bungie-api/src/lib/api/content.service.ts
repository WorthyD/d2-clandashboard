/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { InlineResponse20010 } from '../model/inlineResponse20010';
import { InlineResponse2007 } from '../model/inlineResponse2007';
import { InlineResponse2008 } from '../model/inlineResponse2008';
import { InlineResponse2009 } from '../model/inlineResponse2009';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

    protected basePath = 'https://www.bungie.net/Platform';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Returns a content item referenced by id
     * @param id 
     * @param locale 
     * @param head false
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contentGetContentById(id: number, locale: string, head?: boolean, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2008>;
    public contentGetContentById(id: number, locale: string, head?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2008>>;
    public contentGetContentById(id: number, locale: string, head?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2008>>;
    public contentGetContentById(id: number, locale: string, head?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling contentGetContentById.');
        }
        if (locale === null || locale === undefined) {
            throw new Error('Required parameter locale was null or undefined when calling contentGetContentById.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (head !== undefined && head !== null) {
            queryParameters = queryParameters.set('head', <any>head);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2008>(`${this.configuration.basePath}/Content/GetContentById/${encodeURIComponent(String(id))}/${encodeURIComponent(String(locale))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Returns the newest item that matches a given tag and Content Type.
     * @param locale 
     * @param tag 
     * @param type 
     * @param head Not used.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contentGetContentByTagAndType(locale: string, tag: string, type: string, head?: boolean, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2008>;
    public contentGetContentByTagAndType(locale: string, tag: string, type: string, head?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2008>>;
    public contentGetContentByTagAndType(locale: string, tag: string, type: string, head?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2008>>;
    public contentGetContentByTagAndType(locale: string, tag: string, type: string, head?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (locale === null || locale === undefined) {
            throw new Error('Required parameter locale was null or undefined when calling contentGetContentByTagAndType.');
        }
        if (tag === null || tag === undefined) {
            throw new Error('Required parameter tag was null or undefined when calling contentGetContentByTagAndType.');
        }
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling contentGetContentByTagAndType.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (head !== undefined && head !== null) {
            queryParameters = queryParameters.set('head', <any>head);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2008>(`${this.configuration.basePath}/Content/GetContentByTagAndType/${encodeURIComponent(String(tag))}/${encodeURIComponent(String(type))}/${encodeURIComponent(String(locale))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Gets an object describing a particular variant of content.
     * @param type 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contentGetContentType(type: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2007>;
    public contentGetContentType(type: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2007>>;
    public contentGetContentType(type: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2007>>;
    public contentGetContentType(type: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling contentGetContentType.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2007>(`${this.configuration.basePath}/Content/GetContentType/${encodeURIComponent(String(type))}/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Searches for Content Items that match the given Tag and Content Type.
     * @param locale 
     * @param tag 
     * @param type 
     * @param currentpage Page number for the search results starting with page 1.
     * @param head Not used.
     * @param itemsperpage Not used.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contentSearchContentByTagAndType(locale: string, tag: string, type: string, currentpage?: number, head?: boolean, itemsperpage?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2009>;
    public contentSearchContentByTagAndType(locale: string, tag: string, type: string, currentpage?: number, head?: boolean, itemsperpage?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2009>>;
    public contentSearchContentByTagAndType(locale: string, tag: string, type: string, currentpage?: number, head?: boolean, itemsperpage?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2009>>;
    public contentSearchContentByTagAndType(locale: string, tag: string, type: string, currentpage?: number, head?: boolean, itemsperpage?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (locale === null || locale === undefined) {
            throw new Error('Required parameter locale was null or undefined when calling contentSearchContentByTagAndType.');
        }
        if (tag === null || tag === undefined) {
            throw new Error('Required parameter tag was null or undefined when calling contentSearchContentByTagAndType.');
        }
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling contentSearchContentByTagAndType.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (currentpage !== undefined && currentpage !== null) {
            queryParameters = queryParameters.set('currentpage', <any>currentpage);
        }
        if (head !== undefined && head !== null) {
            queryParameters = queryParameters.set('head', <any>head);
        }
        if (itemsperpage !== undefined && itemsperpage !== null) {
            queryParameters = queryParameters.set('itemsperpage', <any>itemsperpage);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2009>(`${this.configuration.basePath}/Content/SearchContentByTagAndType/${encodeURIComponent(String(tag))}/${encodeURIComponent(String(type))}/${encodeURIComponent(String(locale))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Gets content based on querystring information passed in. Provides basic search and text search capabilities.
     * @param locale 
     * @param ctype Content type tag: Help, News, etc. Supply multiple ctypes separated by space.
     * @param currentpage Page number for the search results, starting with page 1.
     * @param head Not used.
     * @param searchtext Word or phrase for the search.
     * @param source For analytics, hint at the part of the app that triggered the search. Optional.
     * @param tag Tag used on the content to be searched.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contentSearchContentWithText(locale: string, ctype?: string, currentpage?: number, head?: boolean, searchtext?: string, source?: string, tag?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2009>;
    public contentSearchContentWithText(locale: string, ctype?: string, currentpage?: number, head?: boolean, searchtext?: string, source?: string, tag?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2009>>;
    public contentSearchContentWithText(locale: string, ctype?: string, currentpage?: number, head?: boolean, searchtext?: string, source?: string, tag?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2009>>;
    public contentSearchContentWithText(locale: string, ctype?: string, currentpage?: number, head?: boolean, searchtext?: string, source?: string, tag?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (locale === null || locale === undefined) {
            throw new Error('Required parameter locale was null or undefined when calling contentSearchContentWithText.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (ctype !== undefined && ctype !== null) {
            queryParameters = queryParameters.set('ctype', <any>ctype);
        }
        if (currentpage !== undefined && currentpage !== null) {
            queryParameters = queryParameters.set('currentpage', <any>currentpage);
        }
        if (head !== undefined && head !== null) {
            queryParameters = queryParameters.set('head', <any>head);
        }
        if (searchtext !== undefined && searchtext !== null) {
            queryParameters = queryParameters.set('searchtext', <any>searchtext);
        }
        if (source !== undefined && source !== null) {
            queryParameters = queryParameters.set('source', <any>source);
        }
        if (tag !== undefined && tag !== null) {
            queryParameters = queryParameters.set('tag', <any>tag);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse2009>(`${this.configuration.basePath}/Content/Search/${encodeURIComponent(String(locale))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Search for Help Articles.
     * @param searchtext 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public contentSearchHelpArticles(searchtext: string, size: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20010>;
    public contentSearchHelpArticles(searchtext: string, size: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20010>>;
    public contentSearchHelpArticles(searchtext: string, size: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20010>>;
    public contentSearchHelpArticles(searchtext: string, size: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (searchtext === null || searchtext === undefined) {
            throw new Error('Required parameter searchtext was null or undefined when calling contentSearchHelpArticles.');
        }
        if (size === null || size === undefined) {
            throw new Error('Required parameter size was null or undefined when calling contentSearchHelpArticles.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20010>(`${this.configuration.basePath}/Content/SearchHelpArticles/${encodeURIComponent(String(searchtext))}/${encodeURIComponent(String(size))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
