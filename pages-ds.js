// ═══════════════════════════════════════════════
// DS OVERVIEW
// ═══════════════════════════════════════════════
pages['ds-overview'] = () => `
<div class="breadcrumb">DS &amp; Algorithms → <span>Overview</span></div>
<div class="page-header">
  <div class="page-title">Data Structures &amp; Algorithms</div>
  <div class="page-subtitle">3 pillars. One framework. Learn concepts → find real uses → visualize → solve → know the library → code from scratch.</div>
</div>

<div class="elon-box">
  <div class="eb-label">🧭 The Framework</div>
  <div class="eb-rule">Learn it → Use it → Visualize it → Solve it → Know the library → Build it</div>
  <div class="eb-desc">For every data structure: understand the concept, find where it's used in real systems, visualize operations, solve 2-3 problems, know Java's built-in API, then implement from scratch once.</div>
</div>

<div class="two-col" style="margin-top:20px">
  <div class="info-box">
    <div class="info-title">3 Foundational Pillars</div>
    <ul class="content-list" style="margin-top:6px">
      <li><strong>Data Structures</strong> — Arrays, LinkedList, HashMap, Trees, Graph, Heap</li>
      <li><strong>Algorithms</strong> — Sorting, Binary Search, BFS/DFS Traversal</li>
      <li><strong>Patterns</strong> — Two Pointers, Sliding Window, Recursion, Backtracking, Top-K</li>
    </ul>
  </div>
  <div class="info-box">
    <div class="info-title">Retention System</div>
    <ul class="content-list" style="margin-top:6px">
      <li><strong>Solve it</strong> → Mark as Mastered or Needs Review</li>
      <li><strong>Needs Review</strong> → Re-solve after 1 day</li>
      <li><strong>Mastered</strong> → Re-solve after 1 week</li>
      <li>Track in the Revision Tracker →</li>
    </ul>
  </div>
</div>

<div class="section-title" style="margin-top:24px">Big-O Complexity Cheatsheet</div>
<table class="data-table big-o-row">
  <thead><tr><th>Structure / Op</th><th>Access</th><th>Search</th><th>Insert</th><th>Delete</th></tr></thead>
  <tbody>
    <tr><td>Array</td><td class="o1">O(1)</td><td class="on">O(n)</td><td class="on">O(n)</td><td class="on">O(n)</td></tr>
    <tr><td>Linked List</td><td class="on">O(n)</td><td class="on">O(n)</td><td class="o1">O(1)</td><td class="o1">O(1)</td></tr>
    <tr><td>HashMap</td><td class="o1">O(1)</td><td class="o1">O(1)</td><td class="o1">O(1)</td><td class="o1">O(1)</td></tr>
    <tr><td>BST (balanced)</td><td class="ologn">O(log n)</td><td class="ologn">O(log n)</td><td class="ologn">O(log n)</td><td class="ologn">O(log n)</td></tr>
    <tr><td>Heap (min/max)</td><td class="on">O(n)</td><td class="on">O(n)</td><td class="ologn">O(log n)</td><td class="ologn">O(log n)</td></tr>
    <tr><td>Stack / Queue</td><td class="on">O(n)</td><td class="on">O(n)</td><td class="o1">O(1)</td><td class="o1">O(1)</td></tr>
    <tr><td>Graph (adj list)</td><td>—</td><td class="on">O(V+E)</td><td class="o1">O(1)</td><td class="on">O(V+E)</td></tr>
  </tbody>
</table>

<div class="section-title">The 8 Data Structures (Linear → Non-Linear)</div>
<div class="card-grid">
  <div class="card" onclick="showPage('ds-arrays')">
    <div class="card-icon">📦</div>
    <div class="card-title">1. Arrays &amp; Strings</div>
    <div class="card-complexity">Access O(1) · Search O(n)</div>
  </div>
  <div class="card" onclick="showPage('ds-linkedlist')">
    <div class="card-icon">🔗</div>
    <div class="card-title">2. Linked Lists</div>
    <div class="card-complexity">Insert O(1) · Access O(n)</div>
  </div>
  <div class="card" onclick="showPage('ds-hashmap')">
    <div class="card-icon">🗺️</div>
    <div class="card-title">3. HashMap</div>
    <div class="card-complexity">All ops O(1) average</div>
  </div>
  <div class="card" onclick="showPage('ds-trees')">
    <div class="card-icon">🌳</div>
    <div class="card-title">4. Trees &amp; Tries</div>
    <div class="card-complexity">BST ops O(log n)</div>
  </div>
  <div class="card" onclick="showPage('ds-graph')">
    <div class="card-icon">🕸️</div>
    <div class="card-title">5. Graphs</div>
    <div class="card-complexity">BFS/DFS O(V+E)</div>
  </div>
  <div class="card" onclick="showPage('ds-heap')">
    <div class="card-icon">⛰️</div>
    <div class="card-title">6. Heap</div>
    <div class="card-complexity">Get min/max O(1) · Insert O(log n)</div>
  </div>
</div>
`;

// ═══════════════════════════════════════════════
// ARRAYS & STRINGS
// ═══════════════════════════════════════════════
pages['ds-arrays'] = () => `
<div class="breadcrumb">Data Structures → <span>Arrays &amp; Strings</span></div>
<div class="page-header">
  <div class="page-title">Arrays &amp; Strings</div>
  <div class="page-subtitle">Contiguous memory. Constant-time random access. Foundation of every other data structure.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🧠 Mental Model</div>
  <div class="mt-content">Array = numbered mailboxes in a row. Know the box number → instant access. Don't know → check every box. Inserting in the middle forces everyone to move. <strong>Fast at reading, slow at insertion.</strong></div>
</div>

<div class="section-title">Key Properties</div>
<div class="two-col">
  <div class="info-box">
    <div class="info-title">Strengths</div>
    <ul class="content-list" style="margin-top:6px">
      <li>O(1) access by index</li>
      <li>Cache-friendly (contiguous memory)</li>
      <li>O(1) append (amortized, ArrayList)</li>
    </ul>
  </div>
  <div class="info-box">
    <div class="info-title">Weaknesses</div>
    <ul class="content-list" style="margin-top:6px">
      <li>O(n) insert/delete at arbitrary index</li>
      <li>Fixed size (arrays) or resize overhead (ArrayList)</li>
      <li>O(n) linear search (unless sorted)</li>
    </ul>
  </div>
</div>

<div class="section-title">Java String Toolkit — Must Know</div>
<div class="code-block"><pre><span class="cm">// ── String operations ──</span>
String s = <span class="str">"Hello World"</span>;
char[] arr = s.<span class="fn">toCharArray</span>();         <span class="cm">// convert to char array</span>
char c = s.<span class="fn">charAt</span>(<span class="num">0</span>);              <span class="cm">// 'H'</span>
int len = s.<span class="fn">length</span>();               <span class="cm">// 11</span>
String sub = s.<span class="fn">substring</span>(<span class="num">0</span>, <span class="num">5</span>);    <span class="cm">// "Hello"</span>
s.<span class="fn">toLowerCase</span>(); s.<span class="fn">toUpperCase</span>();
s.<span class="fn">contains</span>(<span class="str">"World"</span>);               <span class="cm">// true</span>
s.<span class="fn">split</span>(<span class="str">" "</span>);                      <span class="cm">// ["Hello", "World"]</span>
s.<span class="fn">replace</span>(<span class="str">'l'</span>, <span class="str">'r'</span>);              <span class="cm">// "Herro Worrd"</span>

<span class="cm">// ── Character checks ──</span>
Character.<span class="fn">isDigit</span>(c);              <span class="cm">// is '0'-'9'</span>
Character.<span class="fn">isLetter</span>(c);
Character.<span class="fn">isLetterOrDigit</span>(c);
Character.<span class="fn">toLowerCase</span>(c);
(<span class="kw">int</span>) c - (<span class="kw">int</span>) <span class="str">'a'</span>                 <span class="cm">// position in alphabet (0-25)</span>

<span class="cm">// ── StringBuilder (mutable, efficient string building) ──</span>
StringBuilder sb = <span class="kw">new</span> <span class="cls">StringBuilder</span>();
sb.<span class="fn">append</span>(<span class="str">"Hello"</span>); sb.<span class="fn">append</span>(<span class="str">" World"</span>);
sb.<span class="fn">reverse</span>();                     <span class="cm">// in-place reverse!</span>
sb.<span class="fn">insert</span>(<span class="num">5</span>, <span class="str">","</span>);
sb.<span class="fn">deleteCharAt</span>(<span class="num">5</span>);
String result = sb.<span class="fn">toString</span>();

<span class="cm">// ── Use StringBuilder, not + in loops ──</span>
<span class="cm">// BAD:  String s = ""; for (char c : arr) s += c;  // O(n²)</span>
<span class="cm">// GOOD: StringBuilder sb; for..sb.append(c);  toString() // O(n)</span></pre></div>

<div class="callout amber">
  <strong>StringBuffer vs StringBuilder:</strong> StringBuilder is <strong>NOT thread-safe</strong> but faster. StringBuffer IS thread-safe (synchronized). In interviews, always use StringBuilder (single thread assumed).
</div>

<div class="section-title">Classic Problems</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">Toggle characters of a string <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <div class="code-block"><pre><span class="kw">public static</span> <span class="cls">String</span> <span class="fn">toggleCase</span>(<span class="cls">String</span> s) {
    StringBuilder sb = <span class="kw">new</span> <span class="cls">StringBuilder</span>();
    <span class="kw">for</span> (<span class="kw">char</span> c : s.<span class="fn">toCharArray</span>()) {
        <span class="kw">if</span> (<span class="cls">Character</span>.<span class="fn">isUpperCase</span>(c))
            sb.<span class="fn">append</span>(<span class="cls">Character</span>.<span class="fn">toLowerCase</span>(c));
        <span class="kw">else</span>
            sb.<span class="fn">append</span>(<span class="cls">Character</span>.<span class="fn">toUpperCase</span>(c));
    }
    <span class="kw">return</span> sb.<span class="fn">toString</span>();
}</pre></div>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">Check Anagram Strings <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <div class="code-block"><pre><span class="cm">// O(n) - count char frequencies</span>
<span class="kw">public static boolean</span> <span class="fn">isAnagram</span>(<span class="cls">String</span> s, <span class="cls">String</span> t) {
    <span class="kw">if</span> (s.<span class="fn">length</span>() != t.<span class="fn">length</span>()) <span class="kw">return false</span>;
    <span class="kw">int</span>[] freq = <span class="kw">new int</span>[<span class="num">26</span>];
    <span class="kw">for</span> (<span class="kw">char</span> c : s.<span class="fn">toCharArray</span>()) freq[c - <span class="str">'a'</span>]++;
    <span class="kw">for</span> (<span class="kw">char</span> c : t.<span class="fn">toCharArray</span>()) {
        freq[c - <span class="str">'a'</span>]--;
        <span class="kw">if</span> (freq[c - <span class="str">'a'</span>] < <span class="num">0</span>) <span class="kw">return false</span>;
    }
    <span class="kw">return true</span>;
}</pre></div>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">First and Last Occurrence in Array <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <div class="code-block"><pre><span class="cm">// Binary search variant — O(log n)</span>
<span class="kw">public static int</span>[] <span class="fn">findRange</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> target) {
    <span class="kw">return new int</span>[] { <span class="fn">findBound</span>(nums, target, <span class="kw">true</span>),
                        <span class="fn">findBound</span>(nums, target, <span class="kw">false</span>) };
}

<span class="kw">private static int</span> <span class="fn">findBound</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> target, <span class="kw">boolean</span> first) {
    <span class="kw">int</span> lo = <span class="num">0</span>, hi = nums.length - <span class="num">1</span>, result = -<span class="num">1</span>;
    <span class="kw">while</span> (lo <= hi) {
        <span class="kw">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
        <span class="kw">if</span> (nums[mid] == target) {
            result = mid;
            <span class="kw">if</span> (first) hi = mid - <span class="num">1</span>; <span class="kw">else</span> lo = mid + <span class="num">1</span>;
        } <span class="kw">else if</span> (nums[mid] < target) lo = mid + <span class="num">1</span>;
        <span class="kw">else</span> hi = mid - <span class="num">1</span>;
    }
    <span class="kw">return</span> result;
}</pre></div>
  </div>
</div>

${quizHTML('ds-arrays', [
  { q: "Time complexity of ArrayList.get(i) vs LinkedList.get(i)?", opts: ["Both O(1)", "ArrayList O(1), LinkedList O(n)", "Both O(n)", "ArrayList O(n), LinkedList O(1)"], ans: 1, exp: "ArrayList backed by an array — direct index access O(1). LinkedList must traverse from head/tail to index i — O(n). This is why ArrayList dominates for random access patterns." },
  { q: "Anagram check — most efficient approach?", opts: ["Sort both strings and compare O(n log n)", "Count character frequencies with int[26] — O(n) time, O(1) space", "Use two HashSets", "Compare every character pair"], ans: 1, exp: "int[26] frequency count: increment for string A, decrement for string B. If all zeros at end → anagram. O(n) time, O(1) space (fixed 26 slots). Sorting is O(n log n) — worse. This is the canonical answer." },
  { q: "Two Sum problem — optimal solution?", opts: ["Nested loops O(n²)", "Sort then two pointers O(n log n)", "HashMap: store complement, one pass O(n)", "Binary search O(n log n)"], ans: 2, exp: "HashMap approach: for each num, check if (target - num) is in map. If yes, found pair. If no, add num to map. Single pass O(n) time, O(n) space. This is the expected O(n) solution." },
  { q: "StringBuilder vs String concatenation in a loop — why does it matter?", opts: ["No difference", "String is immutable — each + creates a new object. StringBuilder is mutable — O(n) total vs O(n²)", "StringBuilder is thread-safe", "String + is faster for small strings"], ans: 1, exp: "String s = ''; for n iterations: s += x creates n new String objects (O(n²) total). StringBuilder.append() amortizes to O(1) per append, O(n) total. Never concatenate strings in loops." },
  { q: "Sliding window for 'max sum of k consecutive elements' — complexity?", opts: ["O(n²)", "O(n) — one pass with a sliding window of size k", "O(k)", "O(n log k)"], ans: 1, exp: "Sliding window: compute first window sum, then slide right adding new element and removing leftmost — O(n). Brute force recomputing each window is O(nk). This pattern generalises to many substring/subarray problems." },
  { q: "Find first and last occurrence of target in sorted array — optimal?", opts: ["Linear scan O(n)", "Two binary searches O(log n) — one for first, one for last", "Hash map", "Sort then scan"], ans: 1, exp: "Two binary searches: first finds leftmost occurrence (if nums[mid]==target, update result and continue left). Second finds rightmost (continue right). Both O(log n). Classic binary search variant." },
  { q: "Dutch National Flag algorithm solves?", opts: ["Anagram detection", "Sort array of 0s, 1s, 2s in O(n) time O(1) space (3-way partition)", "Reverse linked list", "Detect cycle"], ans: 1, exp: "Three pointers: low=0, mid=0, high=n-1. If nums[mid]==0: swap with low, advance both. If 1: advance mid. If 2: swap with high, retreat high. Single pass O(n), in-place. Used in QuickSort 3-way partition." },
  { q: "What does Character.isDigit('5') return in Java?", opts: ["'5' (char)", "true", "5 (int)", "false"], ans: 1, exp: "Character.isDigit(char c) returns boolean true for '0'–'9'. Similarly: isLetter(), isUpperCase(), isLowerCase(), toUpperCase(), toLowerCase(). These are the essential String manipulation utilities for interview coding." },
  { q: "Best approach to check if a string is a palindrome?", opts: ["Reverse string and compare O(n) extra space", "Two pointers from both ends, O(n) time O(1) space", "Stack-based comparison", "HashMap of characters"], ans: 1, exp: "Two pointers: left=0, right=len-1. While left<right: if chars differ, not palindrome. O(n) time, O(1) space. Reversing uses O(n) extra space. For interview, always prefer the two-pointer approach." }
])}
${revisionControls('ds-arrays')}
`;

// ═══════════════════════════════════════════════
// LINKED LIST
// ═══════════════════════════════════════════════
pages['ds-linkedlist'] = () => `
<div class="breadcrumb">Data Structures → <span>Linked Lists</span></div>
<div class="page-header">
  <div class="page-title">Linked Lists</div>
  <div class="page-subtitle">Slow to read, fast to insert/delete. Node-based structure. Master reverse and cycle detection — they appear in 80% of LL problems.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🧠 Mental Model</div>
  <div class="mt-content"><strong>Singly:</strong> Treasure hunt — each clue points to the next location, no going back. <strong>Doubly:</strong> Doubly-linked = two-way road. A browser's forward/back history is a doubly linked list. <strong>Key insight:</strong> 3 pointers (prev, curr, next) solve almost every LL problem.</div>
</div>

<div class="section-title">Two Classic Patterns</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">Reverse a Linked List (Iterative) <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <div class="code-block"><pre><span class="kw">public</span> <span class="cls">ListNode</span> <span class="fn">reverse</span>(<span class="cls">ListNode</span> head) {
    <span class="cls">ListNode</span> prev = <span class="kw">null</span>;
    <span class="cls">ListNode</span> curr = head;
    <span class="kw">while</span> (curr != <span class="kw">null</span>) {
        <span class="cls">ListNode</span> next = curr.next;   <span class="cm">// save next</span>
        curr.next = prev;            <span class="cm">// reverse pointer</span>
        prev = curr;                 <span class="cm">// advance prev</span>
        curr = next;                 <span class="cm">// advance curr</span>
    }
    <span class="kw">return</span> prev;  <span class="cm">// new head</span>
}
<span class="cm">// Visualization: null ← 1 ← 2 ← 3 ← 4 ← 5</span></pre></div>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">Detect Cycle (Floyd's Algorithm) <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Use two pointers — slow moves 1 step, fast moves 2 steps. If they meet, there's a cycle. To find the cycle start: reset slow to head, move both 1 step, they meet at the start.</p>
    <div class="code-block"><pre><span class="kw">public boolean</span> <span class="fn">hasCycle</span>(<span class="cls">ListNode</span> head) {
    <span class="cls">ListNode</span> slow = head, fast = head;
    <span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next.next;
        <span class="kw">if</span> (slow == fast) <span class="kw">return true</span>;
    }
    <span class="kw">return false</span>;
}
<span class="cm">// Why it works: if cycle length L, fast gains 1 node/step</span>
<span class="cm">// so they MUST meet within L steps after slow enters cycle</span></pre></div>
  </div>
</div>

<div class="section-title">Java API: LinkedList as Deque</div>
<div class="code-block"><pre><span class="cm">// Java LinkedList implements both List and Deque</span>
<span class="cls">LinkedList</span>&lt;<span class="cls">Integer</span>&gt; deque = <span class="kw">new</span> <span class="cls">LinkedList</span>&lt;&gt;();

<span class="cm">// Queue operations (FIFO)</span>
deque.<span class="fn">offer</span>(<span class="num">1</span>);     <span class="cm">// add to tail</span>
deque.<span class="fn">poll</span>();      <span class="cm">// remove from head</span>
deque.<span class="fn">peek</span>();      <span class="cm">// look at head</span>

<span class="cm">// Stack operations (LIFO)</span>
deque.<span class="fn">push</span>(<span class="num">1</span>);     <span class="cm">// add to head</span>
deque.<span class="fn">pop</span>();       <span class="cm">// remove from head</span>

<span class="cm">// Deque operations</span>
deque.<span class="fn">addFirst</span>(<span class="num">1</span>);  deque.<span class="fn">addLast</span>(<span class="num">1</span>);
deque.<span class="fn">removeFirst</span>(); deque.<span class="fn">removeLast</span>();</pre></div>

<div class="callout blue">
  <strong>Doubly Linked List = LRU Cache:</strong> LRU cache is a classic interview problem. Implementation = HashMap (for O(1) lookup) + Doubly Linked List (for O(1) move-to-front). The DLL enables O(1) eviction of the least-recently-used node.
</div>

${quizHTML('ds-linkedlist', [
  { q: "How to detect a cycle in a linked list — optimal?", opts: ["Use a HashSet of visited nodes O(n) space", "Floyd's slow/fast pointer — O(n) time O(1) space", "Count nodes and compare to expected", "Reverse the list"], ans: 1, exp: "Floyd's cycle detection: slow moves 1 step, fast moves 2 steps. If there's a cycle, fast eventually laps slow and they meet. O(n) time, O(1) space — much better than HashSet's O(n) space." },
  { q: "Reverse a linked list iteratively — what 3 pointers do you need?", opts: ["head, tail, current", "prev, current, next — prev starts null", "left, right, mid", "start, end, temp"], ans: 1, exp: "prev=null, curr=head. Loop: save next=curr.next, point curr.next=prev, advance prev=curr, curr=next. When curr==null, prev is new head. Classic O(n) time O(1) space pattern." },
  { q: "Find the middle of a linked list — best approach?", opts: ["Count nodes, traverse to n/2", "Slow/fast pointer: slow moves 1, fast moves 2 — when fast reaches end, slow is at middle", "Convert to array, find middle", "Reverse and count"], ans: 1, exp: "Slow/fast pointers: fast moves 2x speed. When fast reaches null (or last node for odd length), slow is at the middle. O(n) time, O(1) space, single pass. Used in merge sort on linked lists." },
  { q: "LinkedList as Deque in Java — which operations are O(1)?", opts: ["Only addFirst and addLast", "addFirst, addLast, removeFirst, removeLast, peekFirst, peekLast — all O(1)", "Only remove operations", "All operations except remove"], ans: 1, exp: "Java's LinkedList implements Deque. Since it's doubly linked with head/tail pointers, all head and tail operations are O(1). Use ArrayDeque instead — same O(1) ops but no object overhead (faster in practice)." },
  { q: "Merge two sorted linked lists — approach?", opts: ["Convert both to arrays, merge, convert back", "Iterative comparison with dummy head node — O(m+n) time O(1) space", "Sort the combined list", "Use priority queue"], ans: 1, exp: "Dummy head trick: create dummy node, current pointer. Compare heads of both lists, attach smaller to current, advance. When one list exhausted, attach rest of other. O(m+n) time, O(1) space — no extra memory." },
  { q: "What is the advantage of a doubly linked list over singly?", opts: ["Uses less memory", "O(1) removal of any node (if you have node reference) and backward traversal", "Faster insertion at head", "Supports sorting"], ans: 1, exp: "Singly: to delete a node, you need its predecessor (O(n) to find). Doubly: node.prev.next = node.next in O(1). Also enables backward traversal (for LRU, deque operations). Cost: 2× pointer memory per node." },
  { q: "Reverse linked list in groups of k — key challenge?", opts: ["No special challenge", "Must track the tail of each reversed group to connect to next group's head", "Need to know total length first", "Only works for even k"], ans: 1, exp: "After reversing a group of k: the original head becomes the tail. Connect it to the head of the next reversed group. Tricky: save the connection point before reversing. Common in LeetCode hard problems." },
  { q: "Java Stack vs Deque — which to use?", opts: ["Stack (legacy class)", "Deque (ArrayDeque) — Stack is a legacy class with synchronisation overhead", "Both are identical", "LinkedList only"], ans: 1, exp: "Stack extends Vector which is synchronised — slow. ArrayDeque implements Deque with push/pop O(1) and no sync overhead. Java docs explicitly recommend ArrayDeque over Stack for stack use cases." },
  { q: "Intersection of two linked lists — find the meeting node?", opts: ["Use sorting", "Advance longer list by length difference, then traverse together until they meet — O(m+n) O(1)", "Use two HashSets", "Reverse both lists"], ans: 1, exp: "1) Find lengths of both lists. 2) Advance the pointer on the longer list by (lenA - lenB) steps. 3) Move both pointers together until they point to the same node (same reference, not just equal value). O(m+n) time, O(1) space." }
])}
${revisionControls('ds-linkedlist')}
`;

// ═══════════════════════════════════════════════
// HASHMAP
// ═══════════════════════════════════════════════
pages['ds-hashmap'] = () => `
<div class="breadcrumb">Data Structures → <span>HashMap</span></div>
<div class="page-header">
  <div class="page-title">HashMap — Internal Working</div>
  <div class="page-subtitle">Built on arrays. O(1) average for everything. Understanding how it works internally is a must for Java interviews.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🧠 Mental Model</div>
  <div class="mt-content">HashMap = Array of buckets + Hash function. Think of a parking garage: the key is your license plate, hash function maps it to a floor (bucket), and each floor has spots (linked list / tree for collision handling).</div>
</div>

<div class="section-title">How HashMap Works Internally (Java 8+)</div>

<div class="steps">
  <div class="step">
    <div class="step-num">1</div>
    <div class="step-content">
      <div class="step-title">Hash Calculation</div>
      <div class="step-desc">Calls <span class="inline-code">key.hashCode()</span>, then applies a secondary hash (XOR with right-shifted bits) to spread values more evenly. This is called "perturbation".</div>
    </div>
  </div>
  <div class="step">
    <div class="step-num">2</div>
    <div class="step-content">
      <div class="step-title">Index Calculation</div>
      <div class="step-desc"><span class="inline-code">index = hash & (capacity - 1)</span> — bitwise AND with (capacity-1) is equivalent to modulo but faster. Default capacity = 16 (must be power of 2).</div>
    </div>
  </div>
  <div class="step">
    <div class="step-num">3</div>
    <div class="step-content">
      <div class="step-title">Collision Handling</div>
      <div class="step-desc">Each bucket is initially a linked list. When a bucket has ≥ 8 nodes AND total capacity ≥ 64, it converts to a Red-Black Tree (O(log n) instead of O(n) worst case).</div>
    </div>
  </div>
  <div class="step">
    <div class="step-num">4</div>
    <div class="step-content">
      <div class="step-title">Resize (Rehash)</div>
      <div class="step-desc">When entries exceed <span class="inline-code">capacity × loadFactor (0.75)</span>, capacity doubles. All entries are rehashed. Expensive but amortized O(1).</div>
    </div>
  </div>
</div>

<div class="diagram">
  <svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:620px;font-family:'DM Sans',sans-serif;font-size:12px;display:block;margin:0 auto">
  <!-- Title -->
  <text x="10" y="18" font-size="13" font-weight="700" fill="#374151">HashMap: Array of Buckets + Linked List (chaining)</text>
  
  <!-- Array buckets -->
  <rect x="30" y="35" width="60" height="30" rx="4" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="60" y="55" text-anchor="middle" font-weight="600" fill="#4338ca">[0]</text>
  
  <rect x="30" y="70" width="60" height="30" rx="4" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="60" y="90" text-anchor="middle" font-weight="600" fill="#4338ca">[1]</text>
  
  <rect x="30" y="105" width="60" height="30" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="60" y="125" text-anchor="middle" font-weight="600" fill="#15803d">[2]</text>
  
  <rect x="30" y="140" width="60" height="30" rx="4" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="60" y="160" text-anchor="middle" font-weight="600" fill="#4338ca">[3]</text>

  <!-- Bucket 0 chain -->
  <line x1="90" y1="50" x2="130" y2="50" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#hm-ar)"/>
  <rect x="130" y="35" width="110" height="30" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="185" y="55" text-anchor="middle" font-size="11" fill="#92400e">"foo" → 42</text>

  <!-- Bucket 1 → null -->
  <line x1="90" y1="85" x2="130" y2="85" stroke="#d1d5db" stroke-width="1" stroke-dasharray="4"/>
  <text x="140" y="89" font-size="11" fill="#9ca3af">null</text>

  <!-- Bucket 2 chain (collision!) -->
  <line x1="90" y1="120" x2="130" y2="120" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#hm-ar)"/>
  <rect x="130" y="105" width="110" height="30" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="185" y="125" text-anchor="middle" font-size="11" fill="#166534">"bar" → 7</text>
  
  <line x1="240" y1="120" x2="270" y2="120" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#hm-ar)"/>
  <rect x="270" y="105" width="110" height="30" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="325" y="125" text-anchor="middle" font-size="11" fill="#166534">"baz" → 99</text>
  
  <!-- Collision label -->
  <text x="265" y="150" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">← collision! same bucket</text>

  <!-- Bucket 3 chain -->
  <line x1="90" y1="155" x2="130" y2="155" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#hm-ar)"/>
  <rect x="130" y="140" width="110" height="30" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="185" y="160" text-anchor="middle" font-size="11" fill="#92400e">"qux" → 3</text>

  <!-- Explanation -->
  <text x="420" y="50" font-size="12" fill="#374151" font-weight="600">How it works:</text>
  <text x="420" y="70" font-size="11" fill="#6b7280">1. hash("bar") % 4 = 2</text>
  <text x="420" y="88" font-size="11" fill="#6b7280">2. hash("baz") % 4 = 2 (collision!)</text>
  <text x="420" y="106" font-size="11" fill="#6b7280">3. "baz" chains after "bar"</text>
  <text x="420" y="130" font-size="12" fill="#374151" font-weight="600">Java 8+ (treeify):</text>
  <text x="420" y="148" font-size="11" fill="#6b7280">Bucket > 8 entries →</text>
  <text x="420" y="166" font-size="11" fill="#6b7280">linked list → red-black tree</text>
  <text x="420" y="184" font-size="11" fill="#6b7280">O(n) → O(log n) lookup</text>

  <defs>
    <marker id="hm-ar" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#94a3b8"/></marker>
  </defs>
</svg>
</div>

<div class="section-title">HashMap Variants</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">LinkedHashMap — Insertion Order <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Extends HashMap with a doubly-linked list maintaining insertion order (or access order). Use for implementing LRU Cache or when you need predictable iteration order.</p>
    <div class="code-block"><pre><span class="cm">// LRU Cache using LinkedHashMap</span>
<span class="cls">LinkedHashMap</span>&lt;<span class="cls">Integer</span>, <span class="cls">Integer</span>&gt; cache = <span class="kw">new</span> <span class="cls">LinkedHashMap</span>&lt;&gt;(
    capacity, <span class="num">0.75f</span>, <span class="kw">true</span>  <span class="cm">// accessOrder = true</span>
) {
    <span class="ann">@Override</span>
    <span class="kw">protected boolean</span> <span class="fn">removeEldestEntry</span>(<span class="cls">Map.Entry</span>&lt;<span class="cls">Integer</span>, <span class="cls">Integer</span>&gt; e) {
        <span class="kw">return</span> size() > capacity;
    }
};</pre></div>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">ConcurrentHashMap — Thread-Safe <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Thread-safe alternative to HashMap. Uses segment-level locking (Java 7) and CAS + synchronized on individual buckets (Java 8+). 16 concurrent writers by default.</p>
    <div class="code-block"><pre><span class="cm">// Use in multithreaded code instead of synchronized HashMap</span>
<span class="cls">ConcurrentHashMap</span>&lt;<span class="cls">String</span>, <span class="cls">Integer</span>&gt; map = <span class="kw">new</span> <span class="cls">ConcurrentHashMap</span>&lt;&gt;();

<span class="cm">// Atomic operations</span>
map.<span class="fn">putIfAbsent</span>(<span class="str">"key"</span>, <span class="num">1</span>);
map.<span class="fn">computeIfAbsent</span>(<span class="str">"key"</span>, k -> <span class="kw">new</span> <span class="cls">ArrayList</span>&lt;&gt;());
map.<span class="fn">merge</span>(<span class="str">"key"</span>, <span class="num">1</span>, <span class="cls">Integer</span>::sum);  <span class="cm">// thread-safe increment</span>

<span class="cm">// NOT thread-safe (two operations):</span>
<span class="cm">// if (!map.containsKey(k)) map.put(k, 1); ← use putIfAbsent instead</span></pre></div>
  </div>
</div>

<div class="section-title">Java HashMap Cheatsheet</div>
<div class="code-block"><pre><span class="cls">Map</span>&lt;<span class="cls">String</span>, <span class="cls">Integer</span>&gt; map = <span class="kw">new</span> <span class="cls">HashMap</span>&lt;&gt;();
map.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">1</span>);
map.<span class="fn">get</span>(<span class="str">"a"</span>);               <span class="cm">// 1, null if absent</span>
map.<span class="fn">getOrDefault</span>(<span class="str">"z"</span>, <span class="num">0</span>);  <span class="cm">// 0 (safe default)</span>
map.<span class="fn">containsKey</span>(<span class="str">"a"</span>);     <span class="cm">// true</span>
map.<span class="fn">remove</span>(<span class="str">"a"</span>);
map.<span class="fn">keySet</span>(); map.<span class="fn">values</span>(); map.<span class="fn">entrySet</span>();

<span class="cm">// Frequency count pattern (very common)</span>
<span class="kw">for</span> (<span class="kw">char</span> c : str.<span class="fn">toCharArray</span>())
    map.<span class="fn">merge</span>(c, <span class="num">1</span>, <span class="cls">Integer</span>::sum);  <span class="cm">// or: map.put(c, map.getOrDefault(c,0)+1)</span>

<span class="cm">// Sort by value</span>
map.<span class="fn">entrySet</span>().<span class="fn">stream</span>()
   .<span class="fn">sorted</span>(<span class="cls">Map.Entry</span>.<span class="fn">comparingByValue</span>(<span class="cls">Comparator</span>.<span class="fn">reverseOrder</span>()))
   .<span class="fn">forEach</span>(e -> ...);</pre></div>

${quizHTML('ds-hashmap', [
  { q: "How does HashMap resolve collisions in Java 8+?", opts: ["Open addressing / linear probing", "Separate chaining: linked list, converts to balanced tree (Red-Black) when bucket size > 8", "Double hashing", "Cuckoo hashing"], ans: 1, exp: "Java 8 HashMap: each bucket starts as a linked list. When a bucket has >8 entries, it converts to a TreeMap (Red-Black tree) — O(log n) worst case vs O(n) for a long chain. Converts back to list when size drops to 6." },
  { q: "Why does HashMap rehash when load factor exceeds 0.75?", opts: ["To save memory", "To keep average bucket chain length short — O(1) average lookup degrades as load increases", "Required by Java spec", "To support thread safety"], ans: 1, exp: "Load factor = entries / buckets. At 0.75, average chain length is manageable. Above 0.75, more collisions → longer chains → O(n) lookups. Rehashing doubles capacity and redistributes all entries. Default 0.75 balances memory vs performance." },
  { q: "ConcurrentHashMap vs synchronized HashMap — why is ConcurrentHashMap faster?", opts: ["ConcurrentHashMap uses no locks", "Segment/bucket-level locking: reads are lock-free, writes lock only affected bucket", "ConcurrentHashMap is single-threaded", "synchronized HashMap uses CAS"], ans: 1, exp: "Java 8 ConcurrentHashMap: reads use volatile (lock-free), writes use CAS + synchronized on individual bucket. Synchronized HashMap wraps every method with one lock — all threads blocked for all operations." },
  { q: "LinkedHashMap for LRU — what constructor flag is needed?", opts: ["new LinkedHashMap(cap, 0.75f, false)", "new LinkedHashMap(cap, 0.75f, true) — accessOrder=true", "new LinkedHashMap(cap)", "LinkedHashMap doesn't support LRU"], ans: 1, exp: "The third boolean param is accessOrder. false (default) = insertion order. true = access order — every get()/put() moves the entry to the tail. Override removeEldestEntry() to evict when size exceeds capacity." },
  { q: "HashMap get() average vs worst case?", opts: ["O(1) average, O(1) worst", "O(1) average, O(log n) worst case (tree bucket, Java 8+)", "O(log n) average, O(n) worst", "O(n) always"], ans: 1, exp: "With good hash distribution: O(1). Worst case pre-Java8: all keys hash to same bucket → O(n). Java 8+: long chains convert to Red-Black trees → O(log n) worst case. Deliberate hash collision attacks now have bounded impact." },
  { q: "Can HashMap have null keys? Can Hashtable?", opts: ["Neither supports null", "HashMap: one null key allowed. Hashtable: no null keys (throws NullPointerException)", "Both support multiple null keys", "Only Hashtable supports null keys"], ans: 1, exp: "HashMap handles null key specially — it's stored in bucket 0, bypassing the hash function. Hashtable is legacy, thread-safe, but throws NPE on null keys/values. ConcurrentHashMap also does NOT allow null keys or values." },
  { q: "What happens when you use a mutable object as a HashMap key?", opts: ["It works fine always", "If the key's hashCode changes after insertion, the entry becomes unreachable (lost in wrong bucket)", "HashMap makes an immutable copy", "HashMap updates the bucket automatically"], ans: 1, exp: "HashMap uses hashCode() to find the bucket. If you modify the key object after put(), its hashCode may change → HashMap looks in the wrong bucket → entry is 'lost'. Always use immutable keys (String, Integer, UUID) or final fields in hashCode." },
  { q: "TreeMap vs HashMap — when do you choose TreeMap?", opts: ["TreeMap is always faster", "TreeMap when you need sorted key order, range queries, or floor/ceiling operations — O(log n) vs HashMap O(1)", "TreeMap uses less memory", "HashMap doesn't support get()"], ans: 1, exp: "TreeMap (Red-Black tree): keys always sorted, supports floorKey(), ceilingKey(), subMap(), headMap(), tailMap() — perfect for range queries. O(log n) all ops. HashMap O(1) but unordered. Use TreeMap when order matters." },
  { q: "How to count word frequencies in Java using Map?", opts: ["Use a List and sort", "map.merge(word, 1, Integer::sum) or getOrDefault pattern", "Use indexOf on each word", "Sort array first"], ans: 1, exp: "Clean idiom: map.merge(word, 1, Integer::sum) — if key absent, puts 1; if present, applies the merging function (adds 1). Alternative: map.put(word, map.getOrDefault(word, 0) + 1). merge() is cleaner and more readable." }
])}
${revisionControls('ds-hashmap')}
`;

// ═══════════════════════════════════════════════
// TREES
// ═══════════════════════════════════════════════
pages['ds-trees'] = () => `
<div class="breadcrumb">Data Structures → <span>Trees &amp; Tries</span></div>
<div class="page-header">
  <div class="page-title">Trees, BST &amp; Tries</div>
  <div class="page-subtitle">Hierarchical data. Binary search for sorted lookups. Tries for prefix search and autocomplete.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🧠 The Tree Problem Pattern</div>
  <div class="mt-content"><strong>"What should I compute at each node, and what do I return to the parent?"</strong> Write your recursive function with that mindset. 90% of tree problems follow this structure: process left subtree, process right subtree, combine results at current node.</div>
</div>

<div class="section-title">Tree Traversals</div>
<div class="code-block"><pre><span class="cm">// DFS: in-order (left, root, right) → sorted for BST</span>
<span class="kw">void</span> <span class="fn">inorder</span>(<span class="cls">TreeNode</span> node) {
    <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span>;
    <span class="fn">inorder</span>(node.left);
    visit(node.val);        <span class="cm">// ← processes in sorted order for BST</span>
    <span class="fn">inorder</span>(node.right);
}

<span class="cm">// BFS: level-order traversal (queue-based)</span>
<span class="kw">void</span> <span class="fn">levelOrder</span>(<span class="cls">TreeNode</span> root) {
    <span class="cls">Queue</span>&lt;<span class="cls">TreeNode</span>&gt; q = <span class="kw">new</span> <span class="cls">LinkedList</span>&lt;&gt;();
    q.<span class="fn">offer</span>(root);
    <span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
        <span class="kw">int</span> size = q.<span class="fn">size</span>();         <span class="cm">// process one level</span>
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < size; i++) {
            <span class="cls">TreeNode</span> node = q.<span class="fn">poll</span>();
            visit(node.val);
            <span class="kw">if</span> (node.left != <span class="kw">null</span>) q.<span class="fn">offer</span>(node.left);
            <span class="kw">if</span> (node.right != <span class="kw">null</span>) q.<span class="fn">offer</span>(node.right);
        }
    }
}</pre></div>

<div class="section-title">BST Properties &amp; Java TreeMap</div>
<div class="code-block"><pre><span class="cm">// TreeMap: sorted by key, O(log n) ops — backed by Red-Black Tree</span>
<span class="cls">TreeMap</span>&lt;<span class="cls">Integer</span>, <span class="cls">String</span>&gt; tm = <span class="kw">new</span> <span class="cls">TreeMap</span>&lt;&gt;();
tm.<span class="fn">firstKey</span>(); tm.<span class="fn">lastKey</span>();
tm.<span class="fn">floorKey</span>(<span class="num">5</span>);    <span class="cm">// largest key ≤ 5</span>
tm.<span class="fn">ceilingKey</span>(<span class="num">5</span>);  <span class="cm">// smallest key ≥ 5</span>
tm.<span class="fn">headMap</span>(<span class="num">5</span>);     <span class="cm">// keys < 5 (submap view)</span>
tm.<span class="fn">tailMap</span>(<span class="num">5</span>);     <span class="cm">// keys ≥ 5</span></pre></div>

<div class="section-title">Trie — Autocomplete / Prefix Search</div>
<div class="code-block"><pre><span class="kw">class</span> <span class="cls">TrieNode</span> {
    <span class="cls">TrieNode</span>[] children = <span class="kw">new</span> <span class="cls">TrieNode</span>[<span class="num">26</span>];
    <span class="kw">boolean</span> isEnd = <span class="kw">false</span>;
}

<span class="kw">class</span> <span class="cls">Trie</span> {
    <span class="cls">TrieNode</span> root = <span class="kw">new</span> <span class="cls">TrieNode</span>();

    <span class="kw">void</span> <span class="fn">insert</span>(<span class="cls">String</span> word) {
        <span class="cls">TrieNode</span> node = root;
        <span class="kw">for</span> (<span class="kw">char</span> c : word.<span class="fn">toCharArray</span>()) {
            <span class="kw">int</span> idx = c - <span class="str">'a'</span>;
            <span class="kw">if</span> (node.children[idx] == <span class="kw">null</span>)
                node.children[idx] = <span class="kw">new</span> <span class="cls">TrieNode</span>();
            node = node.children[idx];
        }
        node.isEnd = <span class="kw">true</span>;
    }

    <span class="kw">boolean</span> <span class="fn">startsWith</span>(<span class="cls">String</span> prefix) {
        <span class="cls">TrieNode</span> node = root;
        <span class="kw">for</span> (<span class="kw">char</span> c : prefix.<span class="fn">toCharArray</span>()) {
            <span class="kw">int</span> idx = c - <span class="str">'a'</span>;
            <span class="kw">if</span> (node.children[idx] == <span class="kw">null</span>) <span class="kw">return false</span>;
            node = node.children[idx];
        }
        <span class="kw">return true</span>;
    }
}</pre></div>

<div class="callout blue">
  <strong>Trie real-world use:</strong> Search autocomplete (Google search bar), dictionary spell-check, IP routing tables (radix tries), compiler symbol tables. Trie lookup is O(m) where m = word length — independent of dictionary size!
</div>

${quizHTML('ds-trees', [
  { q: "Inorder traversal of a BST gives?", opts: ["Random order", "Elements in sorted ascending order", "Level-by-level order", "Elements in reverse sorted order"], ans: 1, exp: "BST property: left < root < right. Inorder (left → root → right) visits nodes in ascending sorted order. This is why 'validate BST' and 'kth smallest in BST' both use inorder traversal." },
  { q: "BFS vs DFS — when to use each for trees?", opts: ["Always use DFS", "BFS: level-order, shortest path. DFS: path problems, backtracking, all paths", "Always use BFS", "They give identical results always"], ans: 1, exp: "BFS (queue): explores level by level — best for 'minimum depth', 'level order traversal', 'shortest path'. DFS (recursion/stack): goes deep first — best for 'all paths', 'path sum', 'height', 'validate BST'. Choose based on what the problem needs." },
  { q: "Height of a balanced binary tree with n nodes?", opts: ["O(n)", "O(log n)", "O(n²)", "O(1)"], ans: 1, exp: "A balanced binary tree has O(log n) height. Each level doubles node count: level 0=1, level 1=2, level 2=4 → height = log₂(n). Unbalanced (degenerate/linked-list shape) → O(n) height. This is why AVL/Red-Black trees are important." },
  { q: "What is a Trie best used for?", opts: ["Sorting integers", "Prefix-based search (autocomplete, spell check) — O(m) lookup where m = word length", "Graph traversal", "Balanced sorting"], ans: 1, exp: "Trie (prefix tree): each node represents a character. Common prefixes share nodes. insert/search/startsWith all O(m) where m=word length — independent of dictionary size. Used in autocomplete, spell checkers, IP routing (prefix matching)." },
  { q: "Lowest Common Ancestor (LCA) of two nodes — approach?", opts: ["BFS from both nodes", "Recursive: if root is null or equals either node, return root; recurse both sides; if both non-null, root is LCA", "Sort nodes by value", "Use inorder traversal"], ans: 1, exp: "Recursive LCA: search left and right subtrees. If both return non-null → current node is LCA (nodes are on different sides). If only one returns non-null → both nodes in same subtree (return that result). O(n) time." },
  { q: "Java TreeMap vs TreeSet — difference?", opts: ["No difference", "TreeMap: sorted key-value pairs. TreeSet: sorted unique keys only (backed by TreeMap with dummy values)", "TreeSet is faster", "TreeMap doesn't sort"], ans: 1, exp: "Both backed by Red-Black tree, O(log n) ops. TreeMap: key→value store with sorted keys, supports floorEntry(), ceilingEntry(), subMap(). TreeSet: unique sorted elements, supports floor(), ceiling(), subset(). TreeSet is TreeMap<K, Boolean>." },
  { q: "Max depth vs diameter of a binary tree?", opts: ["They are the same", "Max depth: longest root-to-leaf path. Diameter: longest path between any two nodes (may not pass through root)", "Diameter is always twice max depth", "Diameter counts edges not nodes"], ans: 1, exp: "Max depth: longest root-to-leaf chain. Diameter: longest path between ANY two nodes — could go through left subtree, through root, into right subtree. Diameter = max(left_height + right_height) for each node. Both solved with DFS." },
  { q: "Heap vs BST — which to prefer for 'find minimum'?", opts: ["BST always", "Min-heap: O(1) peek minimum. BST: O(log n) to find leftmost. Heap wins for top-K and priority queue", "They are equivalent", "Depends on language"], ans: 1, exp: "Min-heap peek(): O(1) — root is always minimum. Insertion/removal: O(log n). BST minimum: O(log n) traverse left. For priority queue, repeated find-min: heap is better. For range queries/sorted iteration: BST is better." },
  { q: "Serialize and deserialize a binary tree — which traversal?", opts: ["Inorder alone (ambiguous)", "Preorder (root-left-right) with null markers — uniquely identifies tree structure", "Postorder only", "Level-order only"], ans: 1, exp: "Inorder alone is ambiguous (multiple trees can have same inorder). Preorder with null markers ('1,2,null,null,3,null,null') uniquely encodes structure. During deserialization, split by commas and recursively build tree. Level-order (BFS) also works." }
])}
${revisionControls('ds-trees')}
`;

// ═══════════════════════════════════════════════
// GRAPH
// ═══════════════════════════════════════════════
pages['ds-graph'] = () => `
<div class="breadcrumb">Data Structures → <span>Graphs</span></div>
<div class="page-header">
  <div class="page-title">Graphs</div>
  <div class="page-subtitle">Vertices and edges. BFS for shortest path, DFS for connectivity. Most "hard" LC problems reduce to graph traversal.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🧠 Mental Model</div>
  <div class="mt-content"><strong>BFS</strong> = ripple in a pond (wave expands level by level) → shortest path in unweighted graph. <strong>DFS</strong> = going deep down one tunnel before backtracking → finding connected components, cycles, topological sort.</div>
</div>

<div class="section-title">Graph Representations</div>
<div class="code-block"><pre><span class="cm">// Adjacency List (most common for sparse graphs)</span>
<span class="cls">Map</span>&lt;<span class="cls">Integer</span>, <span class="cls">List</span>&lt;<span class="cls">Integer</span>&gt;&gt; graph = <span class="kw">new</span> <span class="cls">HashMap</span>&lt;&gt;();
graph.<span class="fn">computeIfAbsent</span>(<span class="num">0</span>, k -> <span class="kw">new</span> <span class="cls">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(<span class="num">1</span>);

<span class="cm">// Build from edge list</span>
<span class="kw">int</span>[][] edges = {{<span class="num">0</span>,<span class="num">1</span>},{<span class="num">1</span>,<span class="num">2</span>},{<span class="num">0</span>,<span class="num">2</span>}};
<span class="kw">for</span> (<span class="kw">int</span>[] e : edges) {
    adj.<span class="fn">computeIfAbsent</span>(e[<span class="num">0</span>], k -> <span class="kw">new</span> <span class="cls">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(e[<span class="num">1</span>]);
    adj.<span class="fn">computeIfAbsent</span>(e[<span class="num">1</span>], k -> <span class="kw">new</span> <span class="cls">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(e[<span class="num">0</span>]);
}</pre></div>

<div class="section-title">BFS Template (Shortest Path)</div>
<div class="code-block"><pre><span class="kw">int</span> <span class="fn">bfs</span>(<span class="kw">int</span> start, <span class="kw">int</span> target, <span class="cls">Map</span>&lt;<span class="cls">Integer</span>, <span class="cls">List</span>&lt;<span class="cls">Integer</span>&gt;&gt; adj) {
    <span class="cls">Queue</span>&lt;<span class="cls">Integer</span>&gt; q = <span class="kw">new</span> <span class="cls">LinkedList</span>&lt;&gt;();
    <span class="cls">Set</span>&lt;<span class="cls">Integer</span>&gt; visited = <span class="kw">new</span> <span class="cls">HashSet</span>&lt;&gt;();
    q.<span class="fn">offer</span>(start); visited.<span class="fn">add</span>(start);
    <span class="kw">int</span> level = <span class="num">0</span>;

    <span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
        <span class="kw">int</span> size = q.<span class="fn">size</span>();
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < size; i++) {
            <span class="kw">int</span> node = q.<span class="fn">poll</span>();
            <span class="kw">if</span> (node == target) <span class="kw">return</span> level;
            <span class="kw">for</span> (<span class="kw">int</span> neighbor : adj.<span class="fn">getOrDefault</span>(node, <span class="cls">List.of</span>())) {
                <span class="kw">if</span> (!visited.<span class="fn">contains</span>(neighbor)) {
                    visited.<span class="fn">add</span>(neighbor);
                    q.<span class="fn">offer</span>(neighbor);
                }
            }
        }
        level++;
    }
    <span class="kw">return</span> -<span class="num">1</span>; <span class="cm">// unreachable</span>
}</pre></div>

<div class="section-title">DFS Template (Count Islands)</div>
<div class="code-block"><pre><span class="cm">// Classic: Count Islands (grid DFS)</span>
<span class="kw">int</span> <span class="fn">numIslands</span>(<span class="kw">char</span>[][] grid) {
    <span class="kw">int</span> count = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> r = <span class="num">0</span>; r < grid.length; r++)
        <span class="kw">for</span> (<span class="kw">int</span> c = <span class="num">0</span>; c < grid[<span class="num">0</span>].length; c++)
            <span class="kw">if</span> (grid[r][c] == <span class="str">'1'</span>) { <span class="fn">dfs</span>(grid, r, c); count++; }
    <span class="kw">return</span> count;
}

<span class="kw">void</span> <span class="fn">dfs</span>(<span class="kw">char</span>[][] g, <span class="kw">int</span> r, <span class="kw">int</span> c) {
    <span class="kw">if</span> (r < <span class="num">0</span> || r >= g.length || c < <span class="num">0</span> || c >= g[<span class="num">0</span>].length || g[r][c] != <span class="str">'1'</span>) <span class="kw">return</span>;
    g[r][c] = <span class="str">'0'</span>; <span class="cm">// mark visited (in-place)</span>
    <span class="fn">dfs</span>(g, r+<span class="num">1</span>, c); <span class="fn">dfs</span>(g, r-<span class="num">1</span>, c); <span class="fn">dfs</span>(g, r, c+<span class="num">1</span>); <span class="fn">dfs</span>(g, r, c-<span class="num">1</span>);
}</pre></div>

${quizHTML('ds-graph', [
  { q: "BFS vs DFS for finding shortest path in unweighted graph?", opts: ["DFS is better", "BFS guarantees shortest path in unweighted graphs — explores level by level", "Both give same shortest path", "Dijkstra only"], ans: 1, exp: "BFS explores nodes level by level (distance 1, then 2, then 3...). First time you reach destination = shortest path. DFS may find a path but not the shortest. For weighted graphs, use Dijkstra (non-negative weights) or Bellman-Ford." },
  { q: "How to detect a cycle in a directed graph?", opts: ["Union-Find", "DFS with 3-color marking: white (unvisited), gray (in progress), black (done) — back edge to gray = cycle", "BFS from every node", "Topological sort only"], ans: 1, exp: "During DFS: gray = currently in the call stack. If you encounter a gray node, you found a back edge = cycle. White = not visited, black = fully processed (no cycle through this path). Time: O(V+E)." },
  { q: "Topological sort — what graph property is required?", opts: ["Graph must be connected", "Graph must be a DAG (Directed Acyclic Graph)", "Graph must be undirected", "Graph must have equal in/out degrees"], ans: 1, exp: "Topological sort only works on DAGs. Ordering: for every edge u→v, u appears before v. Used for: build dependency order, course prerequisites, task scheduling. Two algorithms: DFS (reverse finish order) or Kahn's (BFS with in-degree tracking)." },
  { q: "Number of islands problem — best approach?", opts: ["Dynamic programming", "DFS/BFS flood fill: for each unvisited '1', run DFS marking all connected '1's as visited, increment count", "Sort the grid", "Union-Find only"], ans: 1, exp: "Flood fill DFS: iterate grid, when '1' found, do DFS to mark entire island as visited ('0' or separate visited array), increment count. O(m×n) time. Union-Find is an alternative — connect adjacent '1's, count components." },
  { q: "Dijkstra's algorithm fails when?", opts: ["Graph is undirected", "Graph has negative edge weights", "Graph is disconnected", "Graph has more than 1000 nodes"], ans: 1, exp: "Dijkstra's greedy assumption: once a node is finalized, its distance is correct. With negative edges, a later path could improve an already-finalized distance. Use Bellman-Ford for negative weights (O(VE)) or Floyd-Warshall for all-pairs." },
  { q: "Adjacency list vs adjacency matrix — when to use matrix?", opts: ["Always use matrix", "Dense graphs (E ≈ V²) — O(1) edge lookup vs O(degree) for list. For sparse graphs, list is better (memory: V² vs V+E)", "Matrix is always faster", "List is always better"], ans: 1, exp: "Adjacency matrix: O(V²) space, O(1) edge check. Good for dense graphs. Adjacency list: O(V+E) space, O(degree) edge check. Good for sparse graphs (E << V²). Most real graphs (social networks, web) are sparse — use adjacency list." },
  { q: "Union-Find (Disjoint Set) is optimised with?", opts: ["BFS traversal", "Path compression + union by rank — nearly O(1) amortized (O(α(n)) inverse Ackermann)", "Sorting before union", "Linked list backing"], ans: 1, exp: "Path compression: when finding root, make all nodes on path point directly to root — flattens tree. Union by rank: always attach smaller tree under larger — keeps tree shallow. Combined: nearly O(1) per operation (O(α(n)) which is ≤5 for all practical n)." },
  { q: "What algorithm finds the Minimum Spanning Tree?", opts: ["Dijkstra", "Kruskal's (sort edges by weight, add if no cycle — Union-Find) or Prim's (greedy grow from one node)", "BFS from all nodes", "Topological sort"], ans: 1, exp: "Kruskal's: sort all edges by weight, use Union-Find to add edge if it connects two different components. O(E log E). Prim's: start at any node, always add cheapest edge connecting visited to unvisited. Both give MST, similar complexity." },
  { q: "Graph coloring with 2 colors — what graph property does this test?", opts: ["Whether graph is connected", "Whether graph is bipartite — possible iff no odd-length cycles", "Whether graph has Euler circuit", "Whether graph is planar"], ans: 1, exp: "Bipartite check: try to 2-color graph with BFS/DFS. If you can color all adjacent nodes different colors, it's bipartite. Fails iff there's an odd-length cycle. Used in: matching problems, scheduling, Netflix recommendation (users and movies as two node sets)." }
])}
${revisionControls('ds-graph')}
`;

// ═══════════════════════════════════════════════
// HEAP
// ═══════════════════════════════════════════════
pages['ds-heap'] = () => `
<div class="breadcrumb">Data Structures → <span>Heap / Priority Queue</span></div>
<div class="page-header">
  <div class="page-title">Heap &amp; Priority Queue</div>
  <div class="page-subtitle">Get the min/max in O(1). Insert/remove in O(log n). Essential for Top-K, scheduling, and Dijkstra's.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🧠 Mental Model</div>
  <div class="mt-content">Min-heap = bucket that always surfaces the smallest item first. Internally a complete binary tree stored in an array. Parent always ≤ children (min-heap). <strong>Key trick:</strong> To get Top-K largest — use a min-heap of size K. When size exceeds K, remove the minimum. What remains are the K largest.</div>
</div>

<div class="code-block"><pre><span class="cm">// Java PriorityQueue — min-heap by default</span>
<span class="cls">PriorityQueue</span>&lt;<span class="cls">Integer</span>&gt; minHeap = <span class="kw">new</span> <span class="cls">PriorityQueue</span>&lt;&gt;();
<span class="cls">PriorityQueue</span>&lt;<span class="cls">Integer</span>&gt; maxHeap = <span class="kw">new</span> <span class="cls">PriorityQueue</span>&lt;&gt;(<span class="cls">Comparator</span>.<span class="fn">reverseOrder</span>());

minHeap.<span class="fn">offer</span>(<span class="num">5</span>);   <span class="cm">// add, O(log n)</span>
minHeap.<span class="fn">peek</span>();    <span class="cm">// view min, O(1)</span>
minHeap.<span class="fn">poll</span>();    <span class="cm">// remove min, O(log n)</span>

<span class="cm">// Custom comparator for objects</span>
<span class="cls">PriorityQueue</span>&lt;<span class="kw">int</span>[]&gt; pq = <span class="kw">new</span> <span class="cls">PriorityQueue</span>&lt;&gt;((a, b) -> a[<span class="num">0</span>] - b[<span class="num">0</span>]);

<span class="cm">// Top-K pattern: find K largest elements</span>
<span class="kw">public int</span>[] <span class="fn">topKFrequent</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> k) {
    <span class="cls">Map</span>&lt;<span class="cls">Integer</span>,<span class="cls">Integer</span>&gt; freq = <span class="kw">new</span> <span class="cls">HashMap</span>&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> n : nums) freq.<span class="fn">merge</span>(n, <span class="num">1</span>, <span class="cls">Integer</span>::sum);

    <span class="cls">PriorityQueue</span>&lt;<span class="cls">Integer</span>&gt; minHeap =
        <span class="kw">new</span> <span class="cls">PriorityQueue</span>&lt;&gt;((a,b) -> freq.<span class="fn">get</span>(a) - freq.<span class="fn">get</span>(b));

    <span class="kw">for</span> (<span class="kw">int</span> key : freq.<span class="fn">keySet</span>()) {
        minHeap.<span class="fn">offer</span>(key);
        <span class="kw">if</span> (minHeap.<span class="fn">size</span>() > k) minHeap.<span class="fn">poll</span>(); <span class="cm">// evict smallest</span>
    }
    <span class="kw">return</span> minHeap.<span class="fn">stream</span>().<span class="fn">mapToInt</span>(<span class="cls">Integer</span>::intValue).<span class="fn">toArray</span>();
}</pre></div>

<div class="callout blue">
  <strong>Two-Heap Pattern:</strong> Maintain a max-heap for the lower half and a min-heap for the upper half of a stream. The medians of both tops gives you the running median in O(log n) per insertion. Used in "Find Median from Data Stream" (LC 295).
</div>

${revisionControls('ds-heap')}
`;

// ═══════════════════════════════════════════════
// ALGORITHM PATTERNS
// ═══════════════════════════════════════════════
pages['algo-patterns'] = () => `
<div class="breadcrumb">Algorithms → <span>Patterns Overview</span></div>
<div class="page-header">
  <div class="page-title">Algorithm Patterns</div>
  <div class="page-subtitle">Master 8 patterns and you can solve 90% of coding problems. Recognize the pattern → apply the template → adjust for specifics.</div>
</div>

<div class="card-grid">
  <div class="card" onclick="showPage('algo-twopointer')">
    <div class="card-icon">👆👆</div>
    <div class="card-title">Two Pointers</div>
    <div class="card-desc">Sorted arrays, palindromes, pair sums</div>
    <div class="card-complexity">O(n) from O(n²)</div>
  </div>
  <div class="card" onclick="showPage('algo-sliding')">
    <div class="card-icon">🪟</div>
    <div class="card-title">Sliding Window</div>
    <div class="card-desc">Subarrays, substrings, contiguous range</div>
    <div class="card-complexity">O(n) with O(1) window ops</div>
  </div>
  <div class="card" onclick="showPage('algo-binsearch')">
    <div class="card-icon">🔎</div>
    <div class="card-title">Binary Search</div>
    <div class="card-desc">Sorted arrays, answer-space search</div>
    <div class="card-complexity">O(log n)</div>
  </div>
  <div class="card" onclick="showPage('algo-bfsdfs')">
    <div class="card-icon">🌊</div>
    <div class="card-title">BFS / DFS</div>
    <div class="card-desc">Trees, graphs, grid problems</div>
    <div class="card-complexity">O(V+E)</div>
  </div>
  <div class="card" onclick="showPage('algo-backtrack')">
    <div class="card-icon">🔙</div>
    <div class="card-title">Backtracking</div>
    <div class="card-desc">Permutations, combinations, N-Queens</div>
    <div class="card-complexity">O(n!) worst case</div>
  </div>
  <div class="card" onclick="showPage('algo-topk')">
    <div class="card-icon">🏆</div>
    <div class="card-title">Top-K / Heap</div>
    <div class="card-desc">K largest, K most frequent, K closest</div>
    <div class="card-complexity">O(n log k)</div>
  </div>
</div>
`;

pages['algo-twopointer'] = () => `
<div class="breadcrumb">Algorithms → <span>Two Pointers</span></div>
<div class="page-header">
  <div class="page-title">Two Pointers Pattern</div>
  <div class="page-subtitle">Reduces O(n²) brute force to O(n) by moving two pointers intelligently through a sorted structure.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🎯 Trigger Keywords</div>
  <div class="mt-content">"sorted array", "pair with sum", "palindrome", "remove duplicates", "two numbers that...", "container with most water". If you see these + array → think two pointers.</div>
</div>

<div class="section-title">Templates</div>
<div class="code-block"><pre><span class="cm">// Template 1: Opposite ends → move toward center</span>
<span class="kw">int</span> left = <span class="num">0</span>, right = arr.length - <span class="num">1</span>;
<span class="kw">while</span> (left < right) {
    <span class="kw">if</span> (condition(arr[left], arr[right])) {
        <span class="cm">// found!</span>
    } <span class="kw">else if</span> (needBigger()) {
        left++;
    } <span class="kw">else</span> {
        right--;
    }
}

<span class="cm">// Template 2: Same direction (slow/fast) — e.g., remove duplicates</span>
<span class="kw">int</span> slow = <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> fast = <span class="num">0</span>; fast < nums.length; fast++) {
    <span class="kw">if</span> (nums[fast] != nums[slow]) {
        slow++;
        nums[slow] = nums[fast];
    }
}
<span class="kw">return</span> slow + <span class="num">1</span>; <span class="cm">// new length</span></pre></div>

<div class="section-title">Classic: Two Sum II (Sorted Array)</div>
<div class="code-block"><pre><span class="kw">public int</span>[] <span class="fn">twoSum</span>(<span class="kw">int</span>[] numbers, <span class="kw">int</span> target) {
    <span class="kw">int</span> l = <span class="num">0</span>, r = numbers.length - <span class="num">1</span>;
    <span class="kw">while</span> (l < r) {
        <span class="kw">int</span> sum = numbers[l] + numbers[r];
        <span class="kw">if</span> (sum == target) <span class="kw">return new int</span>[]{l+<span class="num">1</span>, r+<span class="num">1</span>};
        <span class="kw">if</span> (sum < target) l++;  <span class="cm">// need bigger sum</span>
        <span class="kw">else</span> r--;               <span class="cm">// need smaller sum</span>
    }
    <span class="kw">return new int</span>[]{-<span class="num">1</span>, -<span class="num">1</span>};
}</pre></div>

${quizHTML('algo-twopointer', [
  { q: "Two pointer pattern requires what array property?", opts: ["Array must be unsorted", "Array must be sorted (convergence from both ends is only valid when sorted)", "Array must have even length", "Array must have unique elements"], ans: 1, exp: "Two pointers converge because sorted order guarantees: moving left pointer right increases sum, moving right pointer left decreases sum. Without sorted order you cannot make this greedy decision. Always sort first if needed." },
  { q: "Container With Most Water — why move the SHORTER pointer?", opts: ["Random choice", "Moving the taller pointer can only decrease area since width shrinks and height stays limited by the shorter side", "Both pointers should move", "The shorter pointer is always wrong"], ans: 1, exp: "Area = min(left, right) x width. If you move the taller pointer: min() is still the shorter side, width decreases → area decreases. Moving shorter pointer: width decreases but you might find a taller wall → possible improvement. So always move shorter." },
  { q: "3Sum — how to avoid duplicate triplets?", opts: ["Use a HashSet for all triplets", "Sort array, skip duplicate values at each pointer position after finding a valid triplet", "Use HashMap to count frequencies", "Sort by absolute value"], ans: 1, exp: "After sorting: outer loop skips if nums[i] == nums[i-1]. When triplet found, skip duplicates for both left and right (while nums[left]==nums[left+1]: left++). O(n^2) total with deduplication handled inline." },
  { q: "Slow/fast pointer: after finding cycle, how to find cycle START?", opts: ["Count nodes in cycle", "Reset slow to head, advance both one step at a time — meeting point is cycle start", "Keep fast at meeting point", "Use a HashSet"], ans: 1, exp: "After detection, reset slow to head. Advance both pointers 1 step at a time. They meet exactly at the cycle start. Mathematical proof: distance head-to-start equals distance meeting-point-to-start within the cycle." },
  { q: "Move all zeros to end — two pointer approach?", opts: ["Use extra array", "Non-zero pointer at 0, scan pointer advances; when non-zero found swap with non-zero pointer position", "Sort the array", "Count zeros first"], ans: 1, exp: "Left pointer tracks insert position for non-zeros. Right pointer scans. When right is non-zero: swap with left, advance left. O(n) time O(1) space. All non-zeros move left, zeros fill the rest." },
  { q: "Trapping Rain Water — two pointer approach?", opts: ["Stack-based only", "Left and right pointers, track max_left and max_right — water at position = min(max_left, max_right) - height[i]", "DP with O(n) space", "Sort heights first"], ans: 1, exp: "Two pointer: left tracks max_left, right tracks max_right. Process side with smaller max. If max_left < max_right: water at left = max_left - height[left], advance left. Otherwise advance right. O(n) time O(1) space." },
  { q: "Remove duplicates from sorted array in-place?", opts: ["Use a set", "Slow pointer tracks last unique; fast pointer finds next unique — copy to slow+1", "Sort first", "Count occurrences first"], ans: 1, exp: "Slow=0 (last written), fast scans. When nums[fast] != nums[slow]: slow++, copy nums[fast] to nums[slow]. Return slow+1 as count of unique elements. In-place O(n) time O(1) space." },
  { q: "Merge two sorted arrays in-place — which direction?", opts: ["Left to right", "Right to left — start from the end to avoid overwriting elements not yet processed", "Doesn't matter", "Sort after copying"], ans: 1, exp: "Merging left-to-right into array A overwrites elements not yet compared. Merge right-to-left: start from end of both, place larger at end of A. No overwrites possible. O(m+n) time O(1) space." },
  { q: "Valid palindrome — two pointer handling of non-alphanumeric chars?", opts: ["Remove all non-alnum first O(n) space", "Two pointers skip non-alphanumeric inline — O(1) extra space", "Always return false if non-alnum present", "Convert to lowercase first"], ans: 1, exp: "While left < right: if not alphanumeric, skip that pointer. Else compare toLowerCase. Skip-inline approach: O(n) time O(1) space — no extra string creation. This is the canonical O(1) space palindrome check." }
])}
`;

pages['algo-sliding'] = () => `
<div class="breadcrumb">Algorithms → <span>Sliding Window</span></div>
<div class="page-header">
  <div class="page-title">Sliding Window Pattern</div>
  <div class="page-subtitle">Efficient processing of contiguous subarrays/substrings. Avoid recomputing by sliding the window and updating incrementally.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🎯 Trigger Keywords</div>
  <div class="mt-content">"subarray/substring with sum/condition", "maximum/minimum of length k window", "longest substring with k distinct chars". Fixed window or variable window based on whether window size is given.</div>
</div>

<div class="code-block"><pre><span class="cm">// Variable size window — Longest Substring Without Repeats</span>
<span class="kw">public int</span> <span class="fn">lengthOfLongestSubstring</span>(<span class="cls">String</span> s) {
    <span class="cls">Map</span>&lt;<span class="cls">Character</span>, <span class="cls">Integer</span>&gt; seen = <span class="kw">new</span> <span class="cls">HashMap</span>&lt;&gt;();
    <span class="kw">int</span> max = <span class="num">0</span>, left = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> right = <span class="num">0</span>; right < s.<span class="fn">length</span>(); right++) {
        <span class="kw">char</span> c = s.<span class="fn">charAt</span>(right);
        <span class="cm">// shrink window if duplicate found</span>
        <span class="kw">if</span> (seen.<span class="fn">containsKey</span>(c))
            left = <span class="cls">Math</span>.<span class="fn">max</span>(left, seen.<span class="fn">get</span>(c) + <span class="num">1</span>);
        seen.<span class="fn">put</span>(c, right);
        max = <span class="cls">Math</span>.<span class="fn">max</span>(max, right - left + <span class="num">1</span>);
    }
    <span class="kw">return</span> max;
}

<span class="cm">// Fixed size window — Max sum of k elements</span>
<span class="kw">public int</span> <span class="fn">maxSumFixed</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> k) {
    <span class="kw">int</span> windowSum = <span class="num">0</span>, maxSum = <span class="cls">Integer</span>.MIN_VALUE;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < arr.length; i++) {
        windowSum += arr[i];
        <span class="kw">if</span> (i >= k - <span class="num">1</span>) {
            maxSum = <span class="cls">Math</span>.<span class="fn">max</span>(maxSum, windowSum);
            windowSum -= arr[i - (k-<span class="num">1</span>)]; <span class="cm">// slide: remove leftmost</span>
        }
    }
    <span class="kw">return</span> maxSum;
}</pre></div>

${revisionControls('algo-sliding')}
`;

pages['algo-binsearch'] = () => `
<div class="breadcrumb">Algorithms → <span>Binary Search</span></div>
<div class="page-header">
  <div class="page-title">Binary Search Pattern</div>
  <div class="page-subtitle">Not just for sorted arrays. Binary search any monotonic condition — search on the answer space.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🎯 Trigger Keywords</div>
  <div class="mt-content">"sorted array find target", "minimum/maximum satisfying a condition", "find first/last occurrence". Advanced: "binary search on the answer" — e.g., find minimum capacity that allows delivery in D days.</div>
</div>

<div class="code-block"><pre><span class="cm">// Classic binary search template (bug-free)</span>
<span class="kw">int</span> <span class="fn">binarySearch</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> target) {
    <span class="kw">int</span> lo = <span class="num">0</span>, hi = nums.length - <span class="num">1</span>;
    <span class="kw">while</span> (lo <= hi) {
        <span class="kw">int</span> mid = lo + (hi - lo) / <span class="num">2</span>; <span class="cm">// avoid overflow!</span>
        <span class="kw">if</span> (nums[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">else if</span> (nums[mid] < target) lo = mid + <span class="num">1</span>;
        <span class="kw">else</span> hi = mid - <span class="num">1</span>;
    }
    <span class="kw">return</span> -<span class="num">1</span>;
}

<span class="cm">// Search on answer space — Koko Eating Bananas</span>
<span class="kw">int</span> <span class="fn">minEatingSpeed</span>(<span class="kw">int</span>[] piles, <span class="kw">int</span> h) {
    <span class="kw">int</span> lo = <span class="num">1</span>, hi = <span class="cls">Arrays</span>.<span class="fn">stream</span>(piles).<span class="fn">max</span>().<span class="fn">getAsInt</span>();
    <span class="kw">while</span> (lo < hi) {
        <span class="kw">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
        <span class="kw">if</span> (<span class="fn">canFinish</span>(piles, h, mid)) hi = mid;
        <span class="kw">else</span> lo = mid + <span class="num">1</span>;
    }
    <span class="kw">return</span> lo;
}</pre></div>

<div class="callout amber">
  <strong>Common bug:</strong> Use <span class="inline-code">mid = lo + (hi - lo) / 2</span> not <span class="inline-code">(lo + hi) / 2</span>. The latter overflows when lo + hi &gt; Integer.MAX_VALUE. Also: <span class="inline-code">lo &lt;= hi</span> for exact match, <span class="inline-code">lo &lt; hi</span> for boundary search.
</div>

${revisionControls('algo-binsearch')}
`;

pages['algo-bfsdfs'] = () => `
<div class="breadcrumb">Algorithms → <span>BFS / DFS</span></div>
<div class="page-header">
  <div class="page-title">BFS &amp; DFS Patterns</div>
  <div class="page-subtitle">BFS = queue (FIFO). DFS = stack (recursion or explicit stack). See graph and tree pages for full templates.</div>
</div>

<div class="two-col">
  <div class="info-box">
    <div class="info-title">BFS Use Cases</div>
    <ul class="content-list" style="margin-top:6px">
      <li>Shortest path (unweighted)</li>
      <li>Level-order tree traversal</li>
      <li>Spreading problems (virus, fire)</li>
      <li>Word ladder (BFS on state space)</li>
    </ul>
  </div>
  <div class="info-box">
    <div class="info-title">DFS Use Cases</div>
    <ul class="content-list" style="margin-top:6px">
      <li>Connected components</li>
      <li>Cycle detection</li>
      <li>Topological sort</li>
      <li>Path existence, maze solving</li>
    </ul>
  </div>
</div>
<div class="callout blue">Full BFS and DFS code templates are on the Graphs page. The patterns are identical for trees (no visited set needed) and graphs (need visited set to avoid cycles).</div>
${revisionControls('algo-bfsdfs')}
`;

pages['algo-backtrack'] = () => `
<div class="breadcrumb">Algorithms → <span>Backtracking</span></div>
<div class="page-header">
  <div class="page-title">Backtracking Pattern</div>
  <div class="page-subtitle">Explore all possibilities, undo choices that don't work. Build solutions incrementally, prune early.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🎯 Trigger Keywords</div>
  <div class="mt-content">"all permutations/combinations/subsets", "N-Queens", "Sudoku solver", "word search". The signature: you need to explore all valid arrangements and pruning matters.</div>
</div>

<div class="code-block"><pre><span class="cm">// Backtracking template</span>
<span class="kw">void</span> <span class="fn">backtrack</span>(state, choices) {
    <span class="kw">if</span> (<span class="fn">isSolution</span>(state)) {
        result.<span class="fn">add</span>(<span class="kw">new</span> <span class="fn">copy</span>(state));
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> (choice : choices) {
        <span class="kw">if</span> (!<span class="fn">isValid</span>(state, choice)) <span class="kw">continue</span>; <span class="cm">// prune</span>
        <span class="fn">makeChoice</span>(state, choice);             <span class="cm">// add</span>
        <span class="fn">backtrack</span>(state, remaining_choices);   <span class="cm">// recurse</span>
        <span class="fn">undoChoice</span>(state, choice);             <span class="cm">// undo (backtrack)</span>
    }
}

<span class="cm">// Example: Subsets</span>
<span class="kw">public</span> <span class="cls">List</span>&lt;<span class="cls">List</span>&lt;<span class="cls">Integer</span>&gt;&gt; <span class="fn">subsets</span>(<span class="kw">int</span>[] nums) {
    <span class="cls">List</span>&lt;<span class="cls">List</span>&lt;<span class="cls">Integer</span>&gt;&gt; res = <span class="kw">new</span> <span class="cls">ArrayList</span>&lt;&gt;();
    <span class="fn">bt</span>(nums, <span class="num">0</span>, <span class="kw">new</span> <span class="cls">ArrayList</span>&lt;&gt;(), res);
    <span class="kw">return</span> res;
}

<span class="kw">void</span> <span class="fn">bt</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> start, <span class="cls">List</span>&lt;<span class="cls">Integer</span>&gt; curr, <span class="cls">List</span>&lt;<span class="cls">List</span>&lt;<span class="cls">Integer</span>&gt;&gt; res) {
    res.<span class="fn">add</span>(<span class="kw">new</span> <span class="cls">ArrayList</span>&lt;&gt;(curr));  <span class="cm">// add current subset</span>
    <span class="kw">for</span> (<span class="kw">int</span> i = start; i < nums.length; i++) {
        curr.<span class="fn">add</span>(nums[i]);
        <span class="fn">bt</span>(nums, i + <span class="num">1</span>, curr, res);
        curr.<span class="fn">remove</span>(curr.<span class="fn">size</span>() - <span class="num">1</span>); <span class="cm">// undo</span>
    }
}</pre></div>

${revisionControls('algo-backtrack')}
`;

pages['algo-topk'] = () => `
<div class="breadcrumb">Algorithms → <span>Top-K / Priority Queue</span></div>
<div class="page-header">
  <div class="page-title">Top-K Pattern</div>
  <div class="page-subtitle">Use a min-heap of size K to efficiently track the K largest elements in O(n log k).</div>
</div>

<div class="callout blue">
  <strong>The Trick:</strong> To find K largest — keep a <strong>min-heap of size K</strong>. If heap.size() &gt; K, poll() removes the smallest. What remains at the end are the K largest. Why min-heap? Because the item most likely to be evicted (too small to be in top-K) is the minimum.
</div>

<div class="code-block"><pre><span class="cm">// K Closest Points to Origin</span>
<span class="kw">public int</span>[][] <span class="fn">kClosest</span>(<span class="kw">int</span>[][] points, <span class="kw">int</span> k) {
    <span class="cm">// max-heap by distance — keep k smallest</span>
    <span class="cls">PriorityQueue</span>&lt;<span class="kw">int</span>[]&gt; pq = <span class="kw">new</span> <span class="cls">PriorityQueue</span>&lt;&gt;(
        (a, b) -> (b[<span class="num">0</span>]*b[<span class="num">0</span>]+b[<span class="num">1</span>]*b[<span class="num">1</span>]) - (a[<span class="num">0</span>]*a[<span class="num">0</span>]+a[<span class="num">1</span>]*a[<span class="num">1</span>])
    );
    <span class="kw">for</span> (<span class="kw">int</span>[] p : points) {
        pq.<span class="fn">offer</span>(p);
        <span class="kw">if</span> (pq.<span class="fn">size</span>() > k) pq.<span class="fn">poll</span>();
    }
    <span class="kw">return</span> pq.<span class="fn">toArray</span>(<span class="kw">new int</span>[k][]);
}</pre></div>

${revisionControls('algo-topk')}
`;

// ═══════════════════════════════════════════════
// REVISION TRACKER
// ═══════════════════════════════════════════════
pages['ds-revision'] = () => {
  const topics = [
    { id: 'ds-arrays', name: 'Arrays & Strings', cat: 'DS' },
    { id: 'ds-linkedlist', name: 'Linked Lists', cat: 'DS' },
    { id: 'ds-hashmap', name: 'HashMap Internals', cat: 'DS' },
    { id: 'ds-trees', name: 'Trees & Tries', cat: 'DS' },
    { id: 'ds-graph', name: 'Graphs', cat: 'DS' },
    { id: 'ds-heap', name: 'Heap / Priority Queue', cat: 'DS' },
    { id: 'algo-twopointer', name: 'Two Pointers', cat: 'Pattern' },
    { id: 'algo-sliding', name: 'Sliding Window', cat: 'Pattern' },
    { id: 'algo-binsearch', name: 'Binary Search', cat: 'Pattern' },
    { id: 'algo-bfsdfs', name: 'BFS / DFS', cat: 'Pattern' },
    { id: 'algo-backtrack', name: 'Backtracking', cat: 'Pattern' },
    { id: 'algo-topk', name: 'Top-K / Heap', cat: 'Pattern' },
    { id: 'sd-framework', name: 'SD Framework', cat: 'System Design' },
    { id: 'sd-patterns', name: '11 SD Patterns', cat: 'System Design' },
    { id: 'sd-url', name: 'URL Shortener', cat: 'Case Study' },
    { id: 'sd-feed', name: 'News Feed', cat: 'Case Study' },
    { id: 'sd-chat', name: 'Chat System', cat: 'Case Study' },
    { id: 'java-core', name: 'Java Core', cat: 'Java' },
    { id: 'java-concurrency', name: 'Java Concurrency', cat: 'Java' },
    { id: 'java-streams', name: 'Streams & Lambda', cat: 'Java' },
    { id: 'spring-core', name: 'Spring Boot', cat: 'Spring' },
    { id: 'k8s-core', name: 'Kubernetes Core', cat: 'K8s' },
  ];

  const mastered = state.mastered;
  const review = state.review;

  const renderGroup = (label, filter) => {
    const items = topics.filter(filter);
    if (!items.length) return '';
    return `<div style="margin-bottom:20px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:8px">${label}</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${items.map(t => {
          const isMastered = mastered.includes(t.id);
          const isReview = review.includes(t.id);
          const bg = isMastered ? '#f0fdf4' : isReview ? '#fef3c7' : 'var(--surface)';
          const border = isMastered ? '#059669' : isReview ? '#d97706' : 'var(--border)';
          const icon = isMastered ? '✓' : isReview ? '📌' : '○';
          return `<div style="background:${bg};border:1px solid ${border};border-radius:8px;padding:8px 12px;font-size:13px;cursor:pointer;transition:all 0.15s" onclick="showPage('${t.id}')">
            ${icon} ${t.name} <span class="tag gray" style="margin-left:4px;font-size:10px">${t.cat}</span>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  };

  const masteredPct = Math.round(mastered.length / topics.length * 100);

  return `
<div class="breadcrumb">DS &amp; Algorithms → <span>Revision Tracker</span></div>
<div class="page-header">
  <div class="page-title">Revision Tracker</div>
  <div class="page-subtitle">Topics you've marked. Mastered topics stay in rotation weekly. Review topics come back daily.</div>
</div>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;margin-bottom:24px;display:flex;align-items:center;gap:24px">
  <div style="flex:1">
    <div style="font-size:13px;color:var(--muted);margin-bottom:6px">Overall Progress</div>
    <div style="height:8px;background:var(--surface2);border-radius:4px;overflow:hidden">
      <div style="height:100%;width:${masteredPct}%;background:var(--accent2);border-radius:4px;transition:width 0.5s"></div>
    </div>
  </div>
  <div style="text-align:center">
    <div style="font-size:28px;font-weight:700;color:var(--accent2)">${mastered.length}</div>
    <div style="font-size:12px;color:var(--muted)">Mastered</div>
  </div>
  <div style="text-align:center">
    <div style="font-size:28px;font-weight:700;color:var(--accent3)">${review.length}</div>
    <div style="font-size:12px;color:var(--muted)">Needs Review</div>
  </div>
  <div style="text-align:center">
    <div style="font-size:28px;font-weight:700;color:var(--muted)">${topics.length - mastered.length - review.length}</div>
    <div style="font-size:12px;color:var(--muted)">Not Started</div>
  </div>
</div>

${review.length > 0 ? `
<div class="callout amber" style="margin-bottom:20px">
  <strong>📌 ${review.length} topic${review.length > 1 ? 's' : ''} need review:</strong> ${review.map(id => topics.find(t => t.id === id)?.name || id).join(', ')}
</div>` : ''}

${renderGroup('All Topics', () => true)}

<div class="callout blue">
  <strong>Tip:</strong> Click any topic to go to its page. Mark it as Mastered or Needs Review at the bottom of each page. Come back to review flagged topics within 24 hours for best retention.
</div>
`;
};
