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

import { InlineResponse20011 } from '../model/inlineResponse20011';
import { InlineResponse20060 } from '../model/inlineResponse20060';
import { InlineResponse20061 } from '../model/inlineResponse20061';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class CommunityContentService {

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
     * Returns community content.
     * @param mediaFilter The type of media to get
     * @param page Zero based page
     * @param sort The sort mode.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public communityContentGetCommunityContent(mediaFilter: number, page: number, sort: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20011>;
    public communityContentGetCommunityContent(mediaFilter: number, page: number, sort: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20011>>;
    public communityContentGetCommunityContent(mediaFilter: number, page: number, sort: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20011>>;
    public communityContentGetCommunityContent(mediaFilter: number, page: number, sort: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (mediaFilter === null || mediaFilter === undefined) {
            throw new Error('Required parameter mediaFilter was null or undefined when calling communityContentGetCommunityContent.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling communityContentGetCommunityContent.');
        }
        if (sort === null || sort === undefined) {
            throw new Error('Required parameter sort was null or undefined when calling communityContentGetCommunityContent.');
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

        return this.httpClient.get<InlineResponse20011>(`${this.configuration.basePath}/CommunityContent/Get/${encodeURIComponent(String(sort))}/${encodeURIComponent(String(mediaFilter))}/${encodeURIComponent(String(page))}/`,
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
     * Returns info about community members who are live streaming.
     * @param page Zero based page.
     * @param partnershipType The type of partnership for which the status should be returned.
     * @param sort The sort mode.
     * @param modeHash The hash of the Activity Mode for which streams should be retrieved. Don&#39;t pass it in or pass 0 to not filter by mode.
     * @param streamLocale The locale for streams you&#39;d like to see. Don&#39;t pass this to fall back on your BNet locale. Pass &#39;ALL&#39; to not filter by locale.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public communityContentGetCommunityLiveStatuses(page: number, partnershipType: number, sort: number, modeHash?: number, streamLocale?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20060>;
    public communityContentGetCommunityLiveStatuses(page: number, partnershipType: number, sort: number, modeHash?: number, streamLocale?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20060>>;
    public communityContentGetCommunityLiveStatuses(page: number, partnershipType: number, sort: number, modeHash?: number, streamLocale?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20060>>;
    public communityContentGetCommunityLiveStatuses(page: number, partnershipType: number, sort: number, modeHash?: number, streamLocale?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling communityContentGetCommunityLiveStatuses.');
        }
        if (partnershipType === null || partnershipType === undefined) {
            throw new Error('Required parameter partnershipType was null or undefined when calling communityContentGetCommunityLiveStatuses.');
        }
        if (sort === null || sort === undefined) {
            throw new Error('Required parameter sort was null or undefined when calling communityContentGetCommunityLiveStatuses.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (modeHash !== undefined && modeHash !== null) {
            queryParameters = queryParameters.set('modeHash', <any>modeHash);
        }
        if (streamLocale !== undefined && streamLocale !== null) {
            queryParameters = queryParameters.set('streamLocale', <any>streamLocale);
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

        return this.httpClient.get<InlineResponse20060>(`${this.configuration.basePath}/CommunityContent/Live/All/${encodeURIComponent(String(partnershipType))}/${encodeURIComponent(String(sort))}/${encodeURIComponent(String(page))}/`,
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
     * Returns info about community members who are live streaming in your clans.
     * @param page Zero based page.
     * @param partnershipType The type of partnership for which the status should be returned.
     * @param sort The sort mode.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public communityContentGetCommunityLiveStatusesForClanmates(page: number, partnershipType: number, sort: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20060>;
    public communityContentGetCommunityLiveStatusesForClanmates(page: number, partnershipType: number, sort: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20060>>;
    public communityContentGetCommunityLiveStatusesForClanmates(page: number, partnershipType: number, sort: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20060>>;
    public communityContentGetCommunityLiveStatusesForClanmates(page: number, partnershipType: number, sort: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling communityContentGetCommunityLiveStatusesForClanmates.');
        }
        if (partnershipType === null || partnershipType === undefined) {
            throw new Error('Required parameter partnershipType was null or undefined when calling communityContentGetCommunityLiveStatusesForClanmates.');
        }
        if (sort === null || sort === undefined) {
            throw new Error('Required parameter sort was null or undefined when calling communityContentGetCommunityLiveStatusesForClanmates.');
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

        return this.httpClient.get<InlineResponse20060>(`${this.configuration.basePath}/CommunityContent/Live/Clan/${encodeURIComponent(String(partnershipType))}/${encodeURIComponent(String(sort))}/${encodeURIComponent(String(page))}/`,
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
     * Returns info about community members who are live streaming among your friends.
     * @param page Zero based page.
     * @param partnershipType The type of partnership for which the status should be returned.
     * @param sort The sort mode.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public communityContentGetCommunityLiveStatusesForFriends(page: number, partnershipType: number, sort: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20060>;
    public communityContentGetCommunityLiveStatusesForFriends(page: number, partnershipType: number, sort: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20060>>;
    public communityContentGetCommunityLiveStatusesForFriends(page: number, partnershipType: number, sort: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20060>>;
    public communityContentGetCommunityLiveStatusesForFriends(page: number, partnershipType: number, sort: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling communityContentGetCommunityLiveStatusesForFriends.');
        }
        if (partnershipType === null || partnershipType === undefined) {
            throw new Error('Required parameter partnershipType was null or undefined when calling communityContentGetCommunityLiveStatusesForFriends.');
        }
        if (sort === null || sort === undefined) {
            throw new Error('Required parameter sort was null or undefined when calling communityContentGetCommunityLiveStatusesForFriends.');
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

        return this.httpClient.get<InlineResponse20060>(`${this.configuration.basePath}/CommunityContent/Live/Friends/${encodeURIComponent(String(partnershipType))}/${encodeURIComponent(String(sort))}/${encodeURIComponent(String(page))}/`,
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
     * Returns info about Featured live streams.
     * @param page Zero based page.
     * @param partnershipType The type of partnership for which the status should be returned.
     * @param sort The sort mode.
     * @param streamLocale The locale for streams you&#39;d like to see. Don&#39;t pass this to fall back on your BNet locale. Pass &#39;ALL&#39; to not filter by locale.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public communityContentGetFeaturedCommunityLiveStatuses(page: number, partnershipType: number, sort: number, streamLocale?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20060>;
    public communityContentGetFeaturedCommunityLiveStatuses(page: number, partnershipType: number, sort: number, streamLocale?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20060>>;
    public communityContentGetFeaturedCommunityLiveStatuses(page: number, partnershipType: number, sort: number, streamLocale?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20060>>;
    public communityContentGetFeaturedCommunityLiveStatuses(page: number, partnershipType: number, sort: number, streamLocale?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling communityContentGetFeaturedCommunityLiveStatuses.');
        }
        if (partnershipType === null || partnershipType === undefined) {
            throw new Error('Required parameter partnershipType was null or undefined when calling communityContentGetFeaturedCommunityLiveStatuses.');
        }
        if (sort === null || sort === undefined) {
            throw new Error('Required parameter sort was null or undefined when calling communityContentGetFeaturedCommunityLiveStatuses.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (streamLocale !== undefined && streamLocale !== null) {
            queryParameters = queryParameters.set('streamLocale', <any>streamLocale);
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

        return this.httpClient.get<InlineResponse20060>(`${this.configuration.basePath}/CommunityContent/Live/Featured/${encodeURIComponent(String(partnershipType))}/${encodeURIComponent(String(sort))}/${encodeURIComponent(String(page))}/`,
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
     * Gets the Live Streaming status of a particular Account and Membership Type.
     * @param membershipId The membershipId related to that type.
     * @param membershipType The type of account for which info will be extracted.
     * @param partnershipType The type of partnership for which info will be extracted.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public communityContentGetStreamingStatusForMember(membershipId: number, membershipType: number, partnershipType: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20061>;
    public communityContentGetStreamingStatusForMember(membershipId: number, membershipType: number, partnershipType: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20061>>;
    public communityContentGetStreamingStatusForMember(membershipId: number, membershipType: number, partnershipType: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20061>>;
    public communityContentGetStreamingStatusForMember(membershipId: number, membershipType: number, partnershipType: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (membershipId === null || membershipId === undefined) {
            throw new Error('Required parameter membershipId was null or undefined when calling communityContentGetStreamingStatusForMember.');
        }
        if (membershipType === null || membershipType === undefined) {
            throw new Error('Required parameter membershipType was null or undefined when calling communityContentGetStreamingStatusForMember.');
        }
        if (partnershipType === null || partnershipType === undefined) {
            throw new Error('Required parameter partnershipType was null or undefined when calling communityContentGetStreamingStatusForMember.');
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

        return this.httpClient.get<InlineResponse20061>(`${this.configuration.basePath}/CommunityContent/Live/Users/${encodeURIComponent(String(partnershipType))}/${encodeURIComponent(String(membershipType))}/${encodeURIComponent(String(membershipId))}/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
