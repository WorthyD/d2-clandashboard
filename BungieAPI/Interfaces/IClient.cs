using BungieAPI.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace BungieAPI
{
    
    [System.CodeDom.Compiler.GeneratedCode("NSwag", "11.20.1.0 (NJsonSchema v9.11.0.0 (Newtonsoft.Json v9.0.0.0))")]
    public partial interface IClient
    {
        /// <param name="applicationId">ID of the application to get usage statistics.</param>
        /// <param name="end">End time for query. Goes to now if not specified.</param>
        /// <param name="start">Start time for query. Goes to 24 hours ago if not specified.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response> App_GetApplicationApiUsageAsync(int applicationId, System.DateTime? end, System.DateTime? start);

        /// <param name="applicationId">ID of the application to get usage statistics.</param>
        /// <param name="end">End time for query. Goes to now if not specified.</param>
        /// <param name="start">Start time for query. Goes to 24 hours ago if not specified.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response> App_GetApplicationApiUsageAsync(int applicationId, System.DateTime? end, System.DateTime? start, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response2> App_GetBungieApplicationsAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response2> App_GetBungieApplicationsAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="id">The requested Bungie.net membership id.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response3> User_GetBungieNetUserByIdAsync(long id);

        /// <param name="id">The requested Bungie.net membership id.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response3> User_GetBungieNetUserByIdAsync(long id, System.Threading.CancellationToken cancellationToken);

        /// <param name="q">The search string.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response4> User_SearchUsersAsync(string q);

        /// <param name="q">The search string.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response4> User_SearchUsersAsync(string q, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response5> User_GetAvailableThemesAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response5> User_GetAvailableThemesAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="membershipId">The membership ID of the target User_</param>
        /// <param name="membershipType">Type of the supplied membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response6> User_GetMembershipDataByIdAsync(long membershipId, MembershipType membershipType);

        /// <param name="membershipId">The membership ID of the target User_</param>
        /// <param name="membershipType">Type of the supplied membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response6> User_GetMembershipDataByIdAsync(long membershipId, MembershipType membershipType, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response7> User_GetMembershipDataForCurrentUserAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response7> User_GetMembershipDataForCurrentUserAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="membershipId">The ID of the member for whom partnerships should be returned.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response8> User_GetPartnershipsAsync(long membershipId);

        /// <param name="membershipId">The ID of the member for whom partnerships should be returned.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response8> User_GetPartnershipsAsync(long membershipId, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response9> Content_GetContentTypeAsync(string type);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response9> Content_GetContentTypeAsync(string type, System.Threading.CancellationToken cancellationToken);

        /// <param name="head">false</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response10> Content_GetContentByIdAsync(bool? head, long id, string locale);

        /// <param name="head">false</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response10> Content_GetContentByIdAsync(bool? head, long id, string locale, System.Threading.CancellationToken cancellationToken);

        /// <param name="head">Not used.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response11> Content_GetContentByTagAndTypeAsync(bool? head, string locale, string tag, string type);

        /// <param name="head">Not used.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response11> Content_GetContentByTagAndTypeAsync(bool? head, string locale, string tag, string type, System.Threading.CancellationToken cancellationToken);

        /// <param name="ctype">Content type tag: Help, News, etc. Supply multiple ctypes separated by space.</param>
        /// <param name="currentpage">Page number for the search results, starting with page 1.</param>
        /// <param name="head">Not used.</param>
        /// <param name="searchtext">Word or phrase for the search.</param>
        /// <param name="source">For analytics, hint at the part of the app that triggered the search. Optional.</param>
        /// <param name="tag">Tag used on the content to be searched.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response12> Content_SearchContentWithTextAsync(string ctype, int? currentpage, bool? head, string locale, string searchtext, string source, string tag);

        /// <param name="ctype">Content type tag: Help, News, etc. Supply multiple ctypes separated by space.</param>
        /// <param name="currentpage">Page number for the search results, starting with page 1.</param>
        /// <param name="head">Not used.</param>
        /// <param name="searchtext">Word or phrase for the search.</param>
        /// <param name="source">For analytics, hint at the part of the app that triggered the search. Optional.</param>
        /// <param name="tag">Tag used on the content to be searched.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response12> Content_SearchContentWithTextAsync(string ctype, int? currentpage, bool? head, string locale, string searchtext, string source, string tag, System.Threading.CancellationToken cancellationToken);

        /// <param name="currentpage">Page number for the search results starting with page 1.</param>
        /// <param name="head">Not used.</param>
        /// <param name="itemsperpage">Not used.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response13> Content_SearchContentByTagAndTypeAsync(int? currentpage, bool? head, int? itemsperpage, string locale, string tag, string type);

        /// <param name="currentpage">Page number for the search results starting with page 1.</param>
        /// <param name="head">Not used.</param>
        /// <param name="itemsperpage">Not used.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response13> Content_SearchContentByTagAndTypeAsync(int? currentpage, bool? head, int? itemsperpage, string locale, string tag, string type, System.Threading.CancellationToken cancellationToken);

        /// <param name="categoryFilter">A category filter</param>
        /// <param name="group">The group, if any.</param>
        /// <param name="locales">Comma seperated list of locales posts must match to return in the result list. Default 'en'</param>
        /// <param name="page">Zero paged page number</param>
        /// <param name="pageSize">Unused</param>
        /// <param name="quickDate">A date filter.</param>
        /// <param name="sort">The sort mode.</param>
        /// <param name="tagstring">The tags to search, if any.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response14> Forum_GetTopicsPagedAsync(CategoryFilter categoryFilter, long group, string locales, int page, int pageSize, QuickDate quickDate, Sort sort, string tagstring);

        /// <param name="categoryFilter">A category filter</param>
        /// <param name="group">The group, if any.</param>
        /// <param name="locales">Comma seperated list of locales posts must match to return in the result list. Default 'en'</param>
        /// <param name="page">Zero paged page number</param>
        /// <param name="pageSize">Unused</param>
        /// <param name="quickDate">A date filter.</param>
        /// <param name="sort">The sort mode.</param>
        /// <param name="tagstring">The tags to search, if any.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response14> Forum_GetTopicsPagedAsync(CategoryFilter categoryFilter, long group, string locales, int page, int pageSize, QuickDate quickDate, Sort sort, string tagstring, System.Threading.CancellationToken cancellationToken);

        /// <param name="categoryFilter">The category filter.</param>
        /// <param name="locales">Comma seperated list of locales posts must match to return in the result list. Default 'en'</param>
        /// <param name="page">Zero base page</param>
        /// <param name="quickDate">The date filter.</param>
        /// <param name="sort">The sort mode.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response15> Forum_GetCoreTopicsPagedAsync(CategoryFilter2 categoryFilter, string locales, int page, QuickDate2 quickDate, Sort2 sort);

        /// <param name="categoryFilter">The category filter.</param>
        /// <param name="locales">Comma seperated list of locales posts must match to return in the result list. Default 'en'</param>
        /// <param name="page">Zero base page</param>
        /// <param name="quickDate">The date filter.</param>
        /// <param name="sort">The sort mode.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response15> Forum_GetCoreTopicsPagedAsync(CategoryFilter2 categoryFilter, string locales, int page, QuickDate2 quickDate, Sort2 sort, System.Threading.CancellationToken cancellationToken);

        /// <param name="showbanned">If this value is not null or empty, banned posts are requested to be returned</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response16> Forum_GetPostsThreadedPagedAsync(bool getParentPost, int page, int pageSize, long parentPostId, int replySize, bool rootThreadMode, string showbanned, SortMode sortMode);

        /// <param name="showbanned">If this value is not null or empty, banned posts are requested to be returned</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response16> Forum_GetPostsThreadedPagedAsync(bool getParentPost, int page, int pageSize, long parentPostId, int replySize, bool rootThreadMode, string showbanned, SortMode sortMode, System.Threading.CancellationToken cancellationToken);

        /// <param name="showbanned">If this value is not null or empty, banned posts are requested to be returned</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response17> Forum_GetPostsThreadedPagedFromChildAsync(long childPostId, int page, int pageSize, int replySize, bool rootThreadMode, string showbanned, SortMode2 sortMode);

        /// <param name="showbanned">If this value is not null or empty, banned posts are requested to be returned</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response17> Forum_GetPostsThreadedPagedFromChildAsync(long childPostId, int page, int pageSize, int replySize, bool rootThreadMode, string showbanned, SortMode2 sortMode, System.Threading.CancellationToken cancellationToken);

        /// <param name="showbanned">If this value is not null or empty, banned posts are requested to be returned</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response18> Forum_GetPostAndParentAsync(long childPostId, string showbanned);

        /// <param name="showbanned">If this value is not null or empty, banned posts are requested to be returned</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response18> Forum_GetPostAndParentAsync(long childPostId, string showbanned, System.Threading.CancellationToken cancellationToken);

        /// <param name="showbanned">If this value is not null or empty, banned posts are requested to be returned</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response19> Forum_GetPostAndParentAwaitingApprovalAsync(long childPostId, string showbanned);

        /// <param name="showbanned">If this value is not null or empty, banned posts are requested to be returned</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response19> Forum_GetPostAndParentAwaitingApprovalAsync(long childPostId, string showbanned, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response20> Forum_GetTopicForContentAsync(long contentId);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response20> Forum_GetTopicForContentAsync(long contentId, System.Threading.CancellationToken cancellationToken);

        /// <param name="partialtag">The partial tag input to generate suggestions from.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response21> Forum_GetForumTagSuggestionsAsync(string partialtag);

        /// <param name="partialtag">The partial tag input to generate suggestions from.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response21> Forum_GetForumTagSuggestionsAsync(string partialtag, System.Threading.CancellationToken cancellationToken);

        /// <param name="topicId">The post id of the topic that has the poll.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response22> Forum_GetPollAsync(long topicId);

        /// <param name="topicId">The post id of the topic that has the poll.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response22> Forum_GetPollAsync(long topicId, System.Threading.CancellationToken cancellationToken);

        /// <param name="topicId">The post id of the recruitment topic you wish to join.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response23> Forum_JoinFireteamThreadAsync(long topicId);

        /// <param name="topicId">The post id of the recruitment topic you wish to join.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response23> Forum_JoinFireteamThreadAsync(long topicId, System.Threading.CancellationToken cancellationToken);

        /// <param name="topicId">The post id of the recruitment topic you wish to leave.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response24> Forum_LeaveFireteamThreadAsync(long topicId);

        /// <param name="topicId">The post id of the recruitment topic you wish to leave.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response24> Forum_LeaveFireteamThreadAsync(long topicId, System.Threading.CancellationToken cancellationToken);

        /// <param name="targetMembershipId">The id of the user you wish to kick.</param>
        /// <param name="topicId">The post id of the recruitment topic you wish to join.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response25> Forum_KickBanFireteamApplicantAsync(long targetMembershipId, long topicId);

        /// <param name="targetMembershipId">The id of the user you wish to kick.</param>
        /// <param name="topicId">The post id of the recruitment topic you wish to join.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response25> Forum_KickBanFireteamApplicantAsync(long targetMembershipId, long topicId, System.Threading.CancellationToken cancellationToken);

        /// <param name="topicId">The post id of the recruitment topic to approve.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response26> Forum_ApproveFireteamThreadAsync(long topicId);

        /// <param name="topicId">The post id of the recruitment topic to approve.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response26> Forum_ApproveFireteamThreadAsync(long topicId, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response27> Forum_GetRecruitmentThreadSummariesAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response27> Forum_GetRecruitmentThreadSummariesAsync(System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response28> GroupV2_GetAvailableAvatarsAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response28> GroupV2_GetAvailableAvatarsAsync(System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response29> GroupV2_GetAvailableThemesAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response29> GroupV2_GetAvailableThemesAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="mType">The Destiny membership type of the account we wish to access settings.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response30> GroupV2_GetUserClanInviteSettingAsync(MType mType);

        /// <param name="mType">The Destiny membership type of the account we wish to access settings.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response30> GroupV2_GetUserClanInviteSettingAsync(MType mType, System.Threading.CancellationToken cancellationToken);

        /// <param name="allowInvites">True to allow invites of this user to clans, false otherwise.</param>
        /// <param name="mType">The Destiny membership type of linked account we are manipulating.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response31> GroupV2_SetUserClanInviteSettingAsync(bool allowInvites, MType2 mType);

        /// <param name="allowInvites">True to allow invites of this user to clans, false otherwise.</param>
        /// <param name="mType">The Destiny membership type of linked account we are manipulating.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response31> GroupV2_SetUserClanInviteSettingAsync(bool allowInvites, MType2 mType, System.Threading.CancellationToken cancellationToken);

        /// <param name="createDateRange">Requested range in which to pull recommended groups</param>
        /// <param name="groupType">Type of groups requested</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response32> GroupV2_GetRecommendedGroupsAsync(CreateDateRange createDateRange, GroupType2 groupType);

        /// <param name="createDateRange">Requested range in which to pull recommended groups</param>
        /// <param name="groupType">Type of groups requested</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response32> GroupV2_GetRecommendedGroupsAsync(CreateDateRange createDateRange, GroupType2 groupType, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response33> GroupV2_GroupSearchAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response33> GroupV2_GroupSearchAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Requested group's id.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response34> GroupV2_GetGroupAsync(long groupId);

        /// <param name="groupId">Requested group's id.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response34> GroupV2_GetGroupAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupName">Exact name of the group to find.</param>
        /// <param name="groupType">Type of group to find.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response35> GroupV2_GetGroupByNameAsync(string groupName, GroupType3 groupType);

        /// <param name="groupName">Exact name of the group to find.</param>
        /// <param name="groupType">Type of group to find.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response35> GroupV2_GetGroupByNameAsync(string groupName, GroupType3 groupType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Requested group's id.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response36> GroupV2_GetGroupOptionalConversationsAsync(long groupId);

        /// <param name="groupId">Requested group's id.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response36> GroupV2_GetGroupOptionalConversationsAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response37> GroupV2_CreateGroupAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response37> GroupV2_CreateGroupAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response38> GroupV2_EditGroupAsync(long groupId);

        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response38> GroupV2_EditGroupAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response39> GroupV2_EditClanBannerAsync(long groupId);

        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response39> GroupV2_EditClanBannerAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response40> GroupV2_EditFounderOptionsAsync(long groupId);

        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response40> GroupV2_EditFounderOptionsAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response41> GroupV2_AddOptionalConversationAsync(long groupId);

        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response41> GroupV2_AddOptionalConversationAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="conversationId">Conversation Id of the channel being edited.</param>
        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response42> GroupV2_EditOptionalConversationAsync(long conversationId, long groupId);

        /// <param name="conversationId">Conversation Id of the channel being edited.</param>
        /// <param name="groupId">Group ID of the group to edit.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response42> GroupV2_EditOptionalConversationAsync(long conversationId, long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 items per page.</param>
        /// <param name="groupId">The ID of the group.</param>
        /// <param name="memberType">Filter out other member types. Use None for all members.</param>
        /// <param name="nameSearch">The name fragment upon which a search should be executed for members with matching display or unique names.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response43> GroupV2_GetMembersOfGroupAsync(int currentpage, long groupId, MemberType? memberType, string nameSearch);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 items per page.</param>
        /// <param name="groupId">The ID of the group.</param>
        /// <param name="memberType">Filter out other member types. Use None for all members.</param>
        /// <param name="nameSearch">The name fragment upon which a search should be executed for members with matching display or unique names.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response43> GroupV2_GetMembersOfGroupAsync(int currentpage, long groupId, MemberType? memberType, string nameSearch, System.Threading.CancellationToken cancellationToken);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 items per page.</param>
        /// <param name="groupId">The ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response44> GroupV2_GetAdminsAndFounderOfGroupAsync(int currentpage, long groupId);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 items per page.</param>
        /// <param name="groupId">The ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response44> GroupV2_GetAdminsAndFounderOfGroupAsync(int currentpage, long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group to which the member belongs.</param>
        /// <param name="membershipId">Membership ID to modify.</param>
        /// <param name="membershipType">Membership type of the provide membership ID.</param>
        /// <param name="memberType">New membertype for the specified member.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response45> GroupV2_EditGroupMembershipAsync(long groupId, long membershipId, MembershipType2 membershipType, MemberType2 memberType);

        /// <param name="groupId">ID of the group to which the member belongs.</param>
        /// <param name="membershipId">Membership ID to modify.</param>
        /// <param name="membershipType">Membership type of the provide membership ID.</param>
        /// <param name="memberType">New membertype for the specified member.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response45> GroupV2_EditGroupMembershipAsync(long groupId, long membershipId, MembershipType2 membershipType, MemberType2 memberType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Group ID to kick the user from.</param>
        /// <param name="membershipId">Membership ID to kick.</param>
        /// <param name="membershipType">Membership type of the provided membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response46> GroupV2_KickMemberAsync(long groupId, long membershipId, MembershipType3 membershipType);

        /// <param name="groupId">Group ID to kick the user from.</param>
        /// <param name="membershipId">Membership ID to kick.</param>
        /// <param name="membershipType">Membership type of the provided membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response46> GroupV2_KickMemberAsync(long groupId, long membershipId, MembershipType3 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Group ID that has the member to ban.</param>
        /// <param name="membershipId">Membership ID of the member to ban from the group.</param>
        /// <param name="membershipType">Membership type of the provided membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response47> GroupV2_BanMemberAsync(long groupId, long membershipId, MembershipType4 membershipType);

        /// <param name="groupId">Group ID that has the member to ban.</param>
        /// <param name="membershipId">Membership ID of the member to ban from the group.</param>
        /// <param name="membershipType">Membership type of the provided membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response47> GroupV2_BanMemberAsync(long groupId, long membershipId, MembershipType4 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="membershipId">Membership ID of the member to unban from the group</param>
        /// <param name="membershipType">Membership type of the provided membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response48> GroupV2_UnbanMemberAsync(long groupId, long membershipId, MembershipType5 membershipType);

        /// <param name="membershipId">Membership ID of the member to unban from the group</param>
        /// <param name="membershipType">Membership type of the provided membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response48> GroupV2_UnbanMemberAsync(long groupId, long membershipId, MembershipType5 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 entries.</param>
        /// <param name="groupId">Group ID whose banned members you are fetching</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response49> GroupV2_GetBannedMembersOfGroupAsync(int currentpage, long groupId);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 entries.</param>
        /// <param name="groupId">Group ID whose banned members you are fetching</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response49> GroupV2_GetBannedMembersOfGroupAsync(int currentpage, long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="founderIdNew">The new founder for this group. Must already be a group admin.</param>
        /// <param name="groupId">The target group id.</param>
        /// <param name="membershipType">Membership type of the provided founderIdNew.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response50> GroupV2_AbdicateFoundershipAsync(long founderIdNew, long groupId, MembershipType6 membershipType);

        /// <param name="founderIdNew">The new founder for this group. Must already be a group admin.</param>
        /// <param name="groupId">The target group id.</param>
        /// <param name="membershipType">Membership type of the provided founderIdNew.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response50> GroupV2_AbdicateFoundershipAsync(long founderIdNew, long groupId, MembershipType6 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group you would like to join.</param>
        /// <param name="membershipType">MembershipType of the account to use when joining.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response51> GroupV2_RequestGroupMembershipAsync(long groupId, MembershipType7 membershipType);

        /// <param name="groupId">ID of the group you would like to join.</param>
        /// <param name="membershipType">MembershipType of the account to use when joining.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response51> GroupV2_RequestGroupMembershipAsync(long groupId, MembershipType7 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 items per page.</param>
        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response52> GroupV2_GetPendingMembershipsAsync(int currentpage, long groupId);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 items per page.</param>
        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response52> GroupV2_GetPendingMembershipsAsync(int currentpage, long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 items per page.</param>
        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response53> GroupV2_GetInvitedIndividualsAsync(int currentpage, long groupId);

        /// <param name="currentpage">Page number (starting with 1). Each page has a fixed size of 50 items per page.</param>
        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response53> GroupV2_GetInvitedIndividualsAsync(int currentpage, long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group.</param>
        /// <param name="membershipType">MembershipType of the account to leave.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response54> GroupV2_RescindGroupMembershipAsync(long groupId, MembershipType8 membershipType);

        /// <param name="groupId">ID of the group.</param>
        /// <param name="membershipType">MembershipType of the account to leave.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response54> GroupV2_RescindGroupMembershipAsync(long groupId, MembershipType8 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response55> GroupV2_ApproveAllPendingAsync(long groupId);

        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response55> GroupV2_ApproveAllPendingAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response56> GroupV2_DenyAllPendingAsync(long groupId);

        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response56> GroupV2_DenyAllPendingAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response57> GroupV2_ApprovePendingForListAsync(long groupId);

        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response57> GroupV2_ApprovePendingForListAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group.</param>
        /// <param name="membershipId">The membership id being approved.</param>
        /// <param name="membershipType">Membership type of the supplied membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response58> GroupV2_ApprovePendingAsync(long groupId, long membershipId, MembershipType9 membershipType);

        /// <param name="groupId">ID of the group.</param>
        /// <param name="membershipId">The membership id being approved.</param>
        /// <param name="membershipType">Membership type of the supplied membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response58> GroupV2_ApprovePendingAsync(long groupId, long membershipId, MembershipType9 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response59> GroupV2_DenyPendingForListAsync(long groupId);

        /// <param name="groupId">ID of the group.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response59> GroupV2_DenyPendingForListAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="filter">Filter apply to list of joined groups.</param>
        /// <param name="groupType">Type of group the supplied member founded.</param>
        /// <param name="membershipId">Membership ID to for which to find founded groups.</param>
        /// <param name="membershipType">Membership type of the supplied membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response60> GroupV2_GetGroupsForMemberAsync(Filter filter, GroupType4 groupType, long membershipId, MembershipType10 membershipType);

        /// <param name="filter">Filter apply to list of joined groups.</param>
        /// <param name="groupType">Type of group the supplied member founded.</param>
        /// <param name="membershipId">Membership ID to for which to find founded groups.</param>
        /// <param name="membershipType">Membership type of the supplied membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response60> GroupV2_GetGroupsForMemberAsync(Filter filter, GroupType4 groupType, long membershipId, MembershipType10 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="filter">Filter apply to list of potential joined groups.</param>
        /// <param name="groupType">Type of group the supplied member applied.</param>
        /// <param name="membershipId">Membership ID to for which to find applied groups.</param>
        /// <param name="membershipType">Membership type of the supplied membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response61> GroupV2_GetPotentialGroupsForMemberAsync(Filter2 filter, GroupType5 groupType, long membershipId, MembershipType11 membershipType);

        /// <param name="filter">Filter apply to list of potential joined groups.</param>
        /// <param name="groupType">Type of group the supplied member applied.</param>
        /// <param name="membershipId">Membership ID to for which to find applied groups.</param>
        /// <param name="membershipType">Membership type of the supplied membership ID.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response61> GroupV2_GetPotentialGroupsForMemberAsync(Filter2 filter, GroupType5 groupType, long membershipId, MembershipType11 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group you would like to join.</param>
        /// <param name="membershipId">Membership id of the account being invited.</param>
        /// <param name="membershipType">MembershipType of the account being invited.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response62> GroupV2_IndividualGroupInviteAsync(long groupId, long membershipId, MembershipType12 membershipType);

        /// <param name="groupId">ID of the group you would like to join.</param>
        /// <param name="membershipId">Membership id of the account being invited.</param>
        /// <param name="membershipType">MembershipType of the account being invited.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response62> GroupV2_IndividualGroupInviteAsync(long groupId, long membershipId, MembershipType12 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">ID of the group you would like to join.</param>
        /// <param name="membershipId">Membership id of the account being cancelled.</param>
        /// <param name="membershipType">MembershipType of the account being cancelled.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response63> GroupV2_IndividualGroupInviteCancelAsync(long groupId, long membershipId, MembershipType13 membershipType);

        /// <param name="groupId">ID of the group you would like to join.</param>
        /// <param name="membershipId">Membership id of the account being cancelled.</param>
        /// <param name="membershipType">MembershipType of the account being cancelled.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response63> GroupV2_IndividualGroupInviteCancelAsync(long groupId, long membershipId, MembershipType13 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <returns>DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response64> Destiny2_GetDestinyManifestAsync();

        /// <returns>DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response64> Destiny2_GetDestinyManifestAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="entityType">The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.</param>
        /// <param name="hashIdentifier">The hash identifier for the specific Entity you want returned.</param>
        /// <returns>Provides common properties for destiny definitions.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response65> Destiny2_GetDestinyEntityDefinitionAsync(string entityType, int hashIdentifier);

        /// <param name="entityType">The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.</param>
        /// <param name="hashIdentifier">The hash identifier for the specific Entity you want returned.</param>
        /// <returns>Provides common properties for destiny definitions.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response65> Destiny2_GetDestinyEntityDefinitionAsync(string entityType, int hashIdentifier, System.Threading.CancellationToken cancellationToken);

        /// <param name="displayName">The full gamertag or PSN id of the player. Spaces and case are ignored.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type, or All.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response66> Destiny2_SearchDestinyPlayerAsync(string displayName, MembershipType14 membershipType);

        /// <param name="displayName">The full gamertag or PSN id of the player. Spaces and case are ignored.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type, or All.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response66> Destiny2_SearchDestinyPlayerAsync(string displayName, MembershipType14 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="membershipId">The ID of the membership whose linked Destiny accounts you want returned. Make sure your membership ID matches its Membership Type: don't pass us a PSN membership ID and the XBox membership type, it's not going to work!</param>
        /// <param name="membershipType">The type for the membership whose linked Destiny accounts you want returned.</param>
        /// <returns>I know what you seek. You seek linked accounts. Found them, you have.
        /// This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response67> Destiny2_GetLinkedProfilesAsync(long membershipId, MembershipType15 membershipType);

        /// <param name="membershipId">The ID of the membership whose linked Destiny accounts you want returned. Make sure your membership ID matches its Membership Type: don't pass us a PSN membership ID and the XBox membership type, it's not going to work!</param>
        /// <param name="membershipType">The type for the membership whose linked Destiny accounts you want returned.</param>
        /// <returns>I know what you seek. You seek linked accounts. Found them, you have.
        /// This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response67> Destiny2_GetLinkedProfilesAsync(long membershipId, MembershipType15 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>The response for GetDestinyProfile, with components for character and item-level data.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response68> Destiny2_GetProfileAsync(System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType16 membershipType);

        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>The response for GetDestinyProfile, with components for character and item-level data.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response68> Destiny2_GetProfileAsync(System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType16 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="characterId">ID of the character.</param>
        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response69> Destiny2_GetCharacterAsync(long characterId, System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType17 membershipType);

        /// <param name="characterId">ID of the character.</param>
        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response69> Destiny2_GetCharacterAsync(long characterId, System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType17 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">A valid group id of clan.</param>
        /// <returns>Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said "things to do." Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response70> Destiny2_GetClanWeeklyRewardStateAsync(long groupId);

        /// <param name="groupId">A valid group id of clan.</param>
        /// <returns>Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said "things to do." Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response70> Destiny2_GetClanWeeklyRewardStateAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">The membership ID of the destiny profile.</param>
        /// <param name="itemInstanceId">The Instance ID of the destiny item.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response71> Destiny2_GetItemAsync(System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, long itemInstanceId, MembershipType18 membershipType);

        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">The membership ID of the destiny profile.</param>
        /// <param name="itemInstanceId">The Instance ID of the destiny item.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response71> Destiny2_GetItemAsync(System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, long itemInstanceId, MembershipType18 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="characterId">The Destiny Character ID of the character for whom we're getting vendor info.</param>
        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID of another User_ You may be denied.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>A response containing all of the components for all requested vendors.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response72> Destiny2_GetVendorsAsync(long characterId, System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType19 membershipType);

        /// <param name="characterId">The Destiny Character ID of the character for whom we're getting vendor info.</param>
        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID of another User_ You may be denied.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>A response containing all of the components for all requested vendors.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response72> Destiny2_GetVendorsAsync(long characterId, System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType19 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="characterId">The Destiny Character ID of the character for whom we're getting vendor info.</param>
        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID of another User_ You may be denied.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="vendorHash">The Hash identifier of the Vendor to be returned.</param>
        /// <returns>A response containing all of the components for a vendor.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response73> Destiny2_GetVendorAsync(long characterId, System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType20 membershipType, int vendorHash);

        /// <param name="characterId">The Destiny Character ID of the character for whom we're getting vendor info.</param>
        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID of another User_ You may be denied.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="vendorHash">The Hash identifier of the Vendor to be returned.</param>
        /// <returns>A response containing all of the components for a vendor.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response73> Destiny2_GetVendorAsync(long characterId, System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType20 membershipType, int vendorHash, System.Threading.CancellationToken cancellationToken);

        /// <param name="characterId">The Destiny Character ID of the character for whom we're getting collectible detail info.</param>
        /// <param name="collectiblePresentationNodeHash">The hash identifier of the Presentation Node for whom we should return collectible details. Details will only be returned for collectibles that are direct descendants of this node.</param>
        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID of another User_ You may be denied.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>Returns the detailed information about a Collectible Presentation Node and any Collectibles that are direct descendants.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response74> Destiny2_GetCollectibleNodeDetailsAsync(long characterId, int collectiblePresentationNodeHash, System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType21 membershipType);

        /// <param name="characterId">The Destiny Character ID of the character for whom we're getting collectible detail info.</param>
        /// <param name="collectiblePresentationNodeHash">The hash identifier of the Presentation Node for whom we should return collectible details. Details will only be returned for collectibles that are direct descendants of this node.</param>
        /// <param name="components">A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.</param>
        /// <param name="destinyMembershipId">Destiny membership ID of another User_ You may be denied.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>Returns the detailed information about a Collectible Presentation Node and any Collectibles that are direct descendants.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response74> Destiny2_GetCollectibleNodeDetailsAsync(long characterId, int collectiblePresentationNodeHash, System.Collections.Generic.IEnumerable<DestinyComponentType> components, long destinyMembershipId, MembershipType21 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response75> Destiny2_TransferItemAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response75> Destiny2_TransferItemAsync(System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response76> Destiny2_PullFromPostmasterAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response76> Destiny2_PullFromPostmasterAsync(System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response77> Destiny2_EquipItemAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response77> Destiny2_EquipItemAsync(System.Threading.CancellationToken cancellationToken);

        /// <returns>The results of a bulk Equipping operation performed through the Destiny API.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response78> Destiny2_EquipItemsAsync();

        /// <returns>The results of a bulk Equipping operation performed through the Destiny API.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response78> Destiny2_EquipItemsAsync(System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response79> Destiny2_SetItemLockStateAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response79> Destiny2_SetItemLockStateAsync(System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response80> Destiny2_InsertSocketPlugAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response80> Destiny2_InsertSocketPlugAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="activityId">The ID of the activity whose PGCR is requested.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response81> Destiny2_GetPostGameCarnageReportAsync(long activityId);

        /// <param name="activityId">The ID of the activity whose PGCR is requested.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response81> Destiny2_GetPostGameCarnageReportAsync(long activityId, System.Threading.CancellationToken cancellationToken);

        /// <param name="activityId">The ID of the activity where you ran into the brigand that you're reporting.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response82> Destiny2_ReportOffensivePostGameCarnageReportPlayerAsync(long activityId);

        /// <param name="activityId">The ID of the activity where you ran into the brigand that you're reporting.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response82> Destiny2_ReportOffensivePostGameCarnageReportPlayerAsync(long activityId, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response83> Destiny2_GetHistoricalStatsDefinitionAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response83> Destiny2_GetHistoricalStatsDefinitionAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Group ID of the clan whose leaderboards you wish to fetch.</param>
        /// <param name="maxtop">Maximum number of top players to return. Use a large number to get entire leaderboard.</param>
        /// <param name="modes">List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <param name="statid">ID of stat to return rather than returning all Leaderboard stats.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response84> Destiny2_GetClanLeaderboardsAsync(long groupId, int? maxtop, string modes, string statid);

        /// <param name="groupId">Group ID of the clan whose leaderboards you wish to fetch.</param>
        /// <param name="maxtop">Maximum number of top players to return. Use a large number to get entire leaderboard.</param>
        /// <param name="modes">List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <param name="statid">ID of stat to return rather than returning all Leaderboard stats.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response84> Destiny2_GetClanLeaderboardsAsync(long groupId, int? maxtop, string modes, string statid, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">Group ID of the clan whose leaderboards you wish to fetch.</param>
        /// <param name="modes">List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response85> Destiny2_GetClanAggregateStatsAsync(long groupId, string modes);

        /// <param name="groupId">Group ID of the clan whose leaderboards you wish to fetch.</param>
        /// <param name="modes">List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response85> Destiny2_GetClanAggregateStatsAsync(long groupId, string modes, System.Threading.CancellationToken cancellationToken);

        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="maxtop">Maximum number of top players to return. Use a large number to get entire leaderboard.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="modes">List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <param name="statid">ID of stat to return rather than returning all Leaderboard stats.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response86> Destiny2_GetLeaderboardsAsync(long destinyMembershipId, int? maxtop, MembershipType22 membershipType, string modes, string statid);

        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="maxtop">Maximum number of top players to return. Use a large number to get entire leaderboard.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="modes">List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <param name="statid">ID of stat to return rather than returning all Leaderboard stats.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response86> Destiny2_GetLeaderboardsAsync(long destinyMembershipId, int? maxtop, MembershipType22 membershipType, string modes, string statid, System.Threading.CancellationToken cancellationToken);

        /// <param name="characterId">The specific character to build the leaderboard around for the provided Destiny Membership.</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="maxtop">Maximum number of top players to return. Use a large number to get entire leaderboard.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="modes">List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <param name="statid">ID of stat to return rather than returning all Leaderboard stats.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response87> Destiny2_GetLeaderboardsForCharacterAsync(long characterId, long destinyMembershipId, int? maxtop, MembershipType23 membershipType, string modes, string statid);

        /// <param name="characterId">The specific character to build the leaderboard around for the provided Destiny Membership.</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="maxtop">Maximum number of top players to return. Use a large number to get entire leaderboard.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="modes">List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <param name="statid">ID of stat to return rather than returning all Leaderboard stats.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response87> Destiny2_GetLeaderboardsForCharacterAsync(long characterId, long destinyMembershipId, int? maxtop, MembershipType23 membershipType, string modes, string statid, System.Threading.CancellationToken cancellationToken);

        /// <param name="page">Page number to return, starting with 0.</param>
        /// <param name="searchTerm">The string to use when searching for Destiny entities.</param>
        /// <param name="type">The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'.</param>
        /// <returns>The results of a search for Destiny Content_ This will be improved on over time, I've been doing some experimenting to see what might be useful.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response88> Destiny2_SearchDestinyEntitiesAsync(int? page, string searchTerm, string type);

        /// <param name="page">Page number to return, starting with 0.</param>
        /// <param name="searchTerm">The string to use when searching for Destiny entities.</param>
        /// <param name="type">The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'.</param>
        /// <returns>The results of a search for Destiny Content_ This will be improved on over time, I've been doing some experimenting to see what might be useful.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response88> Destiny2_SearchDestinyEntitiesAsync(int? page, string searchTerm, string type, System.Threading.CancellationToken cancellationToken);

        /// <param name="characterId">The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.</param>
        /// <param name="dayend">Last day to return when daily stats are requested. Use the format YYYY-MM-DD.</param>
        /// <param name="daystart">First day to return when daily stats are requested. Use the format YYYY-MM-DD</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="groups">Group of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="modes">Game modes to return. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <param name="periodType">Indicates a specific period type to return. Optional. May be: Daily, AllTime, or Activity</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response89> Destiny2_GetHistoricalStatsAsync(long characterId, System.DateTime? dayend, System.DateTime? daystart, long destinyMembershipId, System.Collections.Generic.IEnumerable<DestinyStatsGroupType> groups, MembershipType24 membershipType, System.Collections.Generic.IEnumerable<DestinyActivityModeType> modes, PeriodType2? periodType);

        /// <param name="characterId">The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.</param>
        /// <param name="dayend">Last day to return when daily stats are requested. Use the format YYYY-MM-DD.</param>
        /// <param name="daystart">First day to return when daily stats are requested. Use the format YYYY-MM-DD</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="groups">Group of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="modes">Game modes to return. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.</param>
        /// <param name="periodType">Indicates a specific period type to return. Optional. May be: Daily, AllTime, or Activity</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response89> Destiny2_GetHistoricalStatsAsync(long characterId, System.DateTime? dayend, System.DateTime? daystart, long destinyMembershipId, System.Collections.Generic.IEnumerable<DestinyStatsGroupType> groups, MembershipType24 membershipType, System.Collections.Generic.IEnumerable<DestinyActivityModeType> modes, PeriodType2? periodType, System.Threading.CancellationToken cancellationToken);

        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="groups">Groups of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response90> Destiny2_GetHistoricalStatsForAccountAsync(long destinyMembershipId, System.Collections.Generic.IEnumerable<DestinyStatsGroupType> groups, MembershipType25 membershipType);

        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="groups">Groups of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response90> Destiny2_GetHistoricalStatsForAccountAsync(long destinyMembershipId, System.Collections.Generic.IEnumerable<DestinyStatsGroupType> groups, MembershipType25 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="characterId">The id of the character to retrieve.</param>
        /// <param name="count">Number of rows to return</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="mode">A filter for the activity mode to be returned. None returns all activities. See the documentation for DestinyActivityModeType for valid values, and pass in string representation.</param>
        /// <param name="page">Page number to return, starting with 0.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response91> Destiny2_GetActivityHistoryAsync(long characterId, int? count, long destinyMembershipId, MembershipType26 membershipType, Mode? mode, int? page);

        /// <param name="characterId">The id of the character to retrieve.</param>
        /// <param name="count">Number of rows to return</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <param name="mode">A filter for the activity mode to be returned. None returns all activities. See the documentation for DestinyActivityModeType for valid values, and pass in string representation.</param>
        /// <param name="page">Page number to return, starting with 0.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response91> Destiny2_GetActivityHistoryAsync(long characterId, int? count, long destinyMembershipId, MembershipType26 membershipType, Mode? mode, int? page, System.Threading.CancellationToken cancellationToken);

        /// <param name="characterId">The id of the character to retrieve.</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response92> Destiny2_GetUniqueWeaponHistoryAsync(long characterId, long destinyMembershipId, MembershipType27 membershipType);

        /// <param name="characterId">The id of the character to retrieve.</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response92> Destiny2_GetUniqueWeaponHistoryAsync(long characterId, long destinyMembershipId, MembershipType27 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="characterId">The specific character whose activities should be returned.</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response93> Destiny2_GetDestinyAggregateActivityStatsAsync(long characterId, long destinyMembershipId, MembershipType28 membershipType);

        /// <param name="characterId">The specific character whose activities should be returned.</param>
        /// <param name="destinyMembershipId">The Destiny membershipId of the user to retrieve.</param>
        /// <param name="membershipType">A valid non-BungieNet membership type.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response93> Destiny2_GetDestinyAggregateActivityStatsAsync(long characterId, long destinyMembershipId, MembershipType28 membershipType, System.Threading.CancellationToken cancellationToken);

        /// <param name="milestoneHash">The identifier for the milestone to be returned.</param>
        /// <returns>Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response94> Destiny2_GetPublicMilestoneContentAsync(int milestoneHash);

        /// <param name="milestoneHash">The identifier for the milestone to be returned.</param>
        /// <returns>Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response94> Destiny2_GetPublicMilestoneContentAsync(int milestoneHash, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response95> Destiny2_GetPublicMilestonesAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response95> Destiny2_GetPublicMilestonesAsync(System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response96> Destiny2_AwaInitializeRequestAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response96> Destiny2_AwaInitializeRequestAsync(System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response97> Destiny2_AwaProvideAuthorizationResultAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response97> Destiny2_AwaProvideAuthorizationResultAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="correlationId">The identifier for the advanced write action request.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response98> Destiny2_AwaGetActionTokenAsync(string correlationId);

        /// <param name="correlationId">The identifier for the advanced write action request.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response98> Destiny2_AwaGetActionTokenAsync(string correlationId, System.Threading.CancellationToken cancellationToken);

        /// <param name="mediaFilter">The type of media to get</param>
        /// <param name="page">Zero based page</param>
        /// <param name="sort">The sort mode.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response99> CommunityContent_GetCommunityContentAsync(MediaFilter mediaFilter, int page, Sort3 sort);

        /// <param name="mediaFilter">The type of media to get</param>
        /// <param name="page">Zero based page</param>
        /// <param name="sort">The sort mode.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response99> CommunityContent_GetCommunityContentAsync(MediaFilter mediaFilter, int page, Sort3 sort, System.Threading.CancellationToken cancellationToken);

        /// <param name="modeHash">The hash of the Activity Mode for which streams should be retrieved. Don't pass it in or pass 0 to not filter by mode.</param>
        /// <param name="page">Zero based page.</param>
        /// <param name="partnershipType">The type of partnership for which the status should be returned.</param>
        /// <param name="sort">The sort mode.</param>
        /// <param name="streamLocale">The locale for streams you'd like to see. Don't pass this to fall back on your BNet locale. Pass 'ALL' to not filter by locale.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response100> CommunityContent_GetCommunityLiveStatusesAsync(int? modeHash, int page, PartnershipType2 partnershipType, Sort4 sort, string streamLocale);

        /// <param name="modeHash">The hash of the Activity Mode for which streams should be retrieved. Don't pass it in or pass 0 to not filter by mode.</param>
        /// <param name="page">Zero based page.</param>
        /// <param name="partnershipType">The type of partnership for which the status should be returned.</param>
        /// <param name="sort">The sort mode.</param>
        /// <param name="streamLocale">The locale for streams you'd like to see. Don't pass this to fall back on your BNet locale. Pass 'ALL' to not filter by locale.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response100> CommunityContent_GetCommunityLiveStatusesAsync(int? modeHash, int page, PartnershipType2 partnershipType, Sort4 sort, string streamLocale, System.Threading.CancellationToken cancellationToken);

        /// <param name="page">Zero based page.</param>
        /// <param name="partnershipType">The type of partnership for which the status should be returned.</param>
        /// <param name="sort">The sort mode.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response101> CommunityContent_GetCommunityLiveStatusesForClanmatesAsync(int page, PartnershipType3 partnershipType, Sort5 sort);

        /// <param name="page">Zero based page.</param>
        /// <param name="partnershipType">The type of partnership for which the status should be returned.</param>
        /// <param name="sort">The sort mode.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response101> CommunityContent_GetCommunityLiveStatusesForClanmatesAsync(int page, PartnershipType3 partnershipType, Sort5 sort, System.Threading.CancellationToken cancellationToken);

        /// <param name="page">Zero based page.</param>
        /// <param name="partnershipType">The type of partnership for which the status should be returned.</param>
        /// <param name="sort">The sort mode.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response102> CommunityContent_GetCommunityLiveStatusesForFriendsAsync(int page, PartnershipType4 partnershipType, Sort6 sort);

        /// <param name="page">Zero based page.</param>
        /// <param name="partnershipType">The type of partnership for which the status should be returned.</param>
        /// <param name="sort">The sort mode.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response102> CommunityContent_GetCommunityLiveStatusesForFriendsAsync(int page, PartnershipType4 partnershipType, Sort6 sort, System.Threading.CancellationToken cancellationToken);

        /// <param name="page">Zero based page.</param>
        /// <param name="partnershipType">The type of partnership for which the status should be returned.</param>
        /// <param name="sort">The sort mode.</param>
        /// <param name="streamLocale">The locale for streams you'd like to see. Don't pass this to fall back on your BNet locale. Pass 'ALL' to not filter by locale.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response103> CommunityContent_GetFeaturedCommunityLiveStatusesAsync(int page, PartnershipType5 partnershipType, Sort7 sort, string streamLocale);

        /// <param name="page">Zero based page.</param>
        /// <param name="partnershipType">The type of partnership for which the status should be returned.</param>
        /// <param name="sort">The sort mode.</param>
        /// <param name="streamLocale">The locale for streams you'd like to see. Don't pass this to fall back on your BNet locale. Pass 'ALL' to not filter by locale.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response103> CommunityContent_GetFeaturedCommunityLiveStatusesAsync(int page, PartnershipType5 partnershipType, Sort7 sort, string streamLocale, System.Threading.CancellationToken cancellationToken);

        /// <param name="membershipId">The membershipId related to that type.</param>
        /// <param name="membershipType">The type of account for which info will be extracted.</param>
        /// <param name="partnershipType">The type of partnership for which info will be extracted.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response104> CommunityContent_GetStreamingStatusForMemberAsync(long membershipId, MembershipType29 membershipType, PartnershipType6 partnershipType);

        /// <param name="membershipId">The membershipId related to that type.</param>
        /// <param name="membershipType">The type of account for which info will be extracted.</param>
        /// <param name="partnershipType">The type of partnership for which info will be extracted.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response104> CommunityContent_GetStreamingStatusForMemberAsync(long membershipId, MembershipType29 membershipType, PartnershipType6 partnershipType, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response105> Trending_GetTrendingCategoriesAsync();

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response105> Trending_GetTrendingCategoriesAsync(System.Threading.CancellationToken cancellationToken);

        /// <param name="categoryId">The ID of the category for whom you want additional results.</param>
        /// <param name="pageNumber">The page # of results to return.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response106> Trending_GetTrendingCategoryAsync(string categoryId, int pageNumber);

        /// <param name="categoryId">The ID of the category for whom you want additional results.</param>
        /// <param name="pageNumber">The page # of results to return.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response106> Trending_GetTrendingCategoryAsync(string categoryId, int pageNumber, System.Threading.CancellationToken cancellationToken);

        /// <param name="identifier">The identifier for the entity to be returned.</param>
        /// <param name="trendingEntryType">The type of entity to be returned.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response107> Trending_GetTrendingEntryDetailAsync(string identifier, TrendingEntryType2 trendingEntryType);

        /// <param name="identifier">The identifier for the entity to be returned.</param>
        /// <param name="trendingEntryType">The type of entity to be returned.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response107> Trending_GetTrendingEntryDetailAsync(string identifier, TrendingEntryType2 trendingEntryType, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupId">The group id of the clan.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response108> Fireteam_GetActivePrivateClanFireteamCountAsync(long groupId);

        /// <param name="groupId">The group id of the clan.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response108> Fireteam_GetActivePrivateClanFireteamCountAsync(long groupId, System.Threading.CancellationToken cancellationToken);

        /// <param name="activityType">The activity type to filter by.</param>
        /// <param name="dateRange">The date range to grab available fireteams.</param>
        /// <param name="groupId">The group id of the clan.</param>
        /// <param name="langFilter">An optional language filter.</param>
        /// <param name="page">Zero based page</param>
        /// <param name="platform">The platform filter.</param>
        /// <param name="publicOnly">Determines public/private filtering.</param>
        /// <param name="slotFilter">Filters based on available slots</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response109> Fireteam_GetAvailableClanFireteamsAsync(ActivityType activityType, DateRange2 dateRange, long groupId, string langFilter, int page, Platform platform, PublicOnly publicOnly, SlotFilter slotFilter);

        /// <param name="activityType">The activity type to filter by.</param>
        /// <param name="dateRange">The date range to grab available fireteams.</param>
        /// <param name="groupId">The group id of the clan.</param>
        /// <param name="langFilter">An optional language filter.</param>
        /// <param name="page">Zero based page</param>
        /// <param name="platform">The platform filter.</param>
        /// <param name="publicOnly">Determines public/private filtering.</param>
        /// <param name="slotFilter">Filters based on available slots</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response109> Fireteam_GetAvailableClanFireteamsAsync(ActivityType activityType, DateRange2 dateRange, long groupId, string langFilter, int page, Platform platform, PublicOnly publicOnly, SlotFilter slotFilter, System.Threading.CancellationToken cancellationToken);

        /// <param name="activityType">The activity type to filter by.</param>
        /// <param name="dateRange">The date range to grab available fireteams.</param>
        /// <param name="langFilter">An optional language filter.</param>
        /// <param name="page">Zero based page</param>
        /// <param name="platform">The platform filter.</param>
        /// <param name="slotFilter">Filters based on available slots</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response110> Fireteam_SearchPublicAvailableClanFireteamsAsync(ActivityType2 activityType, DateRange3 dateRange, string langFilter, int page, Platform2 platform, SlotFilter2 slotFilter);

        /// <param name="activityType">The activity type to filter by.</param>
        /// <param name="dateRange">The date range to grab available fireteams.</param>
        /// <param name="langFilter">An optional language filter.</param>
        /// <param name="page">Zero based page</param>
        /// <param name="platform">The platform filter.</param>
        /// <param name="slotFilter">Filters based on available slots</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response110> Fireteam_SearchPublicAvailableClanFireteamsAsync(ActivityType2 activityType, DateRange3 dateRange, string langFilter, int page, Platform2 platform, SlotFilter2 slotFilter, System.Threading.CancellationToken cancellationToken);

        /// <param name="groupFilter">If true, filter by clan. Otherwise, ignore the clan and show all of the user's fireteams.</param>
        /// <param name="groupId">The group id of the clan. (This parameter is ignored unless the optional query parameter groupFilter is true).</param>
        /// <param name="includeClosed">If true, return fireteams that have been closed.</param>
        /// <param name="langFilter">An optional language filter.</param>
        /// <param name="page">Deprecated parameter, ignored.</param>
        /// <param name="platform">The platform filter.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response111> Fireteam_GetMyClanFireteamsAsync(bool? groupFilter, long groupId, bool includeClosed, string langFilter, int page, Platform3 platform);

        /// <param name="groupFilter">If true, filter by clan. Otherwise, ignore the clan and show all of the user's fireteams.</param>
        /// <param name="groupId">The group id of the clan. (This parameter is ignored unless the optional query parameter groupFilter is true).</param>
        /// <param name="includeClosed">If true, return fireteams that have been closed.</param>
        /// <param name="langFilter">An optional language filter.</param>
        /// <param name="page">Deprecated parameter, ignored.</param>
        /// <param name="platform">The platform filter.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response111> Fireteam_GetMyClanFireteamsAsync(bool? groupFilter, long groupId, bool includeClosed, string langFilter, int page, Platform3 platform, System.Threading.CancellationToken cancellationToken);

        /// <param name="fireteamId">The unique id of the Fireteam_</param>
        /// <param name="groupId">The group id of the clan.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response112> Fireteam_GetClanFireteamAsync(long fireteamId, long groupId);

        /// <param name="fireteamId">The unique id of the Fireteam_</param>
        /// <param name="groupId">The group id of the clan.</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response112> Fireteam_GetClanFireteamAsync(long fireteamId, long groupId, System.Threading.CancellationToken cancellationToken);

        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response113> GetAvailableLocalesAsync();
    
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response113> GetAvailableLocalesAsync(System.Threading.CancellationToken cancellationToken);
    
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response114> GetCommonSettingsAsync();
    
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response114> GetCommonSettingsAsync(System.Threading.CancellationToken cancellationToken);
    
        /// <param name="includestreaming">Determines whether Streaming Alerts are included in results</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        System.Threading.Tasks.Task<Response115> GetGlobalAlertsAsync(bool? includestreaming);
    
        /// <param name="includestreaming">Determines whether Streaming Alerts are included in results</param>
        /// <returns>Look at the Response property for more information about the nature of this response</returns>
        /// <exception cref="SwaggerException">A server side error occurred.</exception>
        /// <param name="cancellationToken">A cancellation token that can be used by other objects or threads to receive notice of cancellation.</param>
        System.Threading.Tasks.Task<Response115> GetGlobalAlertsAsync(bool? includestreaming, System.Threading.CancellationToken cancellationToken);
    
    }

}
