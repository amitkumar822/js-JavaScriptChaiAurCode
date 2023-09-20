package leetCodeOnline;

import java.util.HashMap;

public class LargestSubstringBetweenTwoEqualCharacters624 {
    static int longestSub(String str){
        int res = -1;
        HashMap<Character,Integer> hm = new HashMap<>();
        for(int i=0; i<str.length(); i++){
            char ch = str.charAt(i);
            if(hm.containsKey(ch)){
                res = Math.max(res,i-hm.get(ch)-1);
            }else{
                hm.put(ch,i);
            }
        }
        return res;
    }
    public static void main(String[] args) {
        String str = "abca";
        int result = longestSub(str);
        System.out.println(result);
    }
}

/*
Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.



Example 1:

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
Example 2:

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
Example 3:

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.


Constraints:

1 <= s.length <= 300
s contains only lowercase English letters.
 */